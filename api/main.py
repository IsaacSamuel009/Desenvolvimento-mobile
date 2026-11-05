
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="API Biblioteca IFMA",
    description="Sistema de gerenciamento de livros",
    version="1.0.0"
)

# Permitir comunicação com o aplicativo
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo dos livros
class Livro(BaseModel):
    titulo: str
    autor: str

# Banco de dados simulado
livros = [
    {
        "id": 1,
        "titulo": "Dom Casmurro",
        "autor": "Machado de Assis"
    },
    {
        "id": 2,
        "titulo": "O Cortiço",
        "autor": "Aluísio Azevedo"
    }
]

# Rota inicial
@app.get("/")
def inicio():
    return {
        "mensagem": "API da Biblioteca IFMA funcionando!"
    }

# GET - Listar livros
@app.get("/livros")
def listar_livros():
    return livros

# GET - Buscar livro por ID
@app.get("/livros/{livro_id}")
def buscar_livro(livro_id: int):
    for livro in livros:
        if livro["id"] == livro_id:
            return livro

    raise HTTPException(
        status_code=404,
        detail="Livro não encontrado"
    )

# POST - Cadastrar livro
@app.post("/livros", status_code=201)
def cadastrar_livro(livro: Livro):
    novo_livro = {
        "id": max(
            [item["id"] for item in livros],
            default=0
        ) + 1,
        "titulo": livro.titulo,
        "autor": livro.autor
    }

    livros.append(novo_livro)

    return novo_livro

# PUT - Atualizar livro completo
@app.put("/livros/{livro_id}")
def atualizar_livro(livro_id: int, dados: Livro):
    for livro in livros:
        if livro["id"] == livro_id:
            livro["titulo"] = dados.titulo
            livro["autor"] = dados.autor
            return livro

    raise HTTPException(
        status_code=404,
        detail="Livro não encontrado"
    )

# PATCH - Atualizar parcialmente
@app.patch("/livros/{livro_id}")
def atualizar_parcial(livro_id: int, dados: dict):
    for livro in livros:
        if livro["id"] == livro_id:
            for campo, valor in dados.items():
                if campo in ["titulo", "autor"]:
                    livro[campo] = valor

            return livro

    raise HTTPException(
        status_code=404,
        detail="Livro não encontrado"
    )

# DELETE - Excluir livro
@app.delete("/livros/{livro_id}")
def excluir_livro(livro_id: int):
    for livro in livros:
        if livro["id"] == livro_id:
            livros.remove(livro)
            return {
                "mensagem": "Livro excluído com sucesso"
            }

    raise HTTPException(
        status_code=404,
        detail="Livro não encontrado"
    )
