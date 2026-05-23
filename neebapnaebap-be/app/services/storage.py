from uuid import uuid4

import boto3

from app.core.config import settings
from app.domain.images import build_image_key


class StorageService:
    def __init__(self) -> None:
        self.client = boto3.client(
            "s3",
            endpoint_url=settings.s3_endpoint_url,
            aws_access_key_id=settings.s3_access_key_id,
            aws_secret_access_key=settings.s3_secret_access_key,
            region_name=settings.s3_region,
        )

    def create_image_upload_intent(self, *, user_id: str, filename: str, content_type: str) -> dict[str, str | None]:
        object_key = build_image_key(user_id=user_id, filename=filename)
        upload_url = self.client.generate_presigned_url(
            ClientMethod="put_object",
            Params={"Bucket": settings.s3_bucket, "Key": object_key, "ContentType": content_type},
            ExpiresIn=900,
        )
        public_url = None
        if settings.s3_endpoint_url:
            public_url = f"{settings.s3_endpoint_url.rstrip('/')}/{settings.s3_bucket}/{object_key}"
        return {
            "image_id": str(uuid4()),
            "object_key": object_key,
            "upload_url": upload_url,
            "public_url": public_url,
        }
