"""
Top-level API v1 router — aggregates all endpoint routers.
"""
from fastapi import APIRouter

from app.api.v1.endpoints import health

api_router = APIRouter()

api_router.include_router(health.router, tags=["health"])

# Future domains registered here:
# api_router.include_router(dsa.router,      prefix="/dsa",      tags=["dsa"])
# api_router.include_router(learner.router,  prefix="/learner",  tags=["learner"])
