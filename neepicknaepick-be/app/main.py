from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import battles, health, images
from app.core.config import settings

app = FastAPI(title=settings.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api/v1")
app.include_router(images.router, prefix="/api/v1")
app.include_router(battles.router, prefix="/api/v1")
