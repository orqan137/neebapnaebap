from enum import StrEnum
from pydantic import BaseModel, Field


class VoteCategoryDto(StrEnum):
    taste = "taste"
    value = "value"
    healthy = "healthy"


class ImageUploadIntentRequest(BaseModel):
    filename: str
    content_type: str = Field(pattern=r"^image/")
    size_bytes: int = Field(gt=0)


class ImageUploadIntentResponse(BaseModel):
    image_id: str
    object_key: str
    upload_url: str
    public_url: str | None = None


class BattleCreateRequest(BaseModel):
    group_id: str
    title: str
    categories: list[VoteCategoryDto] = [VoteCategoryDto.taste, VoteCategoryDto.value, VoteCategoryDto.healthy]


class VoteRequest(BaseModel):
    category: VoteCategoryDto
    selected_entry_id: str
