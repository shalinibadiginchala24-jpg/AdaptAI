"""
Health check endpoint.

GET /api/health  →  {"status": "ok", "service": "AdaptAI API"}
"""
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class HealthResponse(BaseModel):
    status: str
    service: str


@router.get("/health", response_model=HealthResponse, summary="Health check")
async def health_check() -> HealthResponse:
    """Returns service liveness status."""
    return HealthResponse(status="ok", service="AdaptAI API")
