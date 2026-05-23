from fastapi import APIRouter, Header

from app.schemas.core import ImageUploadIntentRequest, ImageUploadIntentResponse
from app.services.storage import StorageService

router = APIRouter(prefix="/images", tags=["images"])


@router.post("/upload-intents", response_model=ImageUploadIntentResponse)
def create_upload_intent(
    payload: ImageUploadIntentRequest,
    x_user_id: str = Header(default="local-user"),
) -> ImageUploadIntentResponse:
    intent = StorageService().create_image_upload_intent(
        user_id=x_user_id, filename=payload.filename, content_type=payload.content_type
    )
    return ImageUploadIntentResponse(**intent)
