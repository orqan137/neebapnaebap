from pathlib import Path
from uuid import uuid4

_ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png", "webp", "heic", "heif"}


def build_image_key(user_id: str, filename: str) -> str:
    """Build a stable object-storage key for a user-uploaded pick image."""
    ext = Path(filename).suffix.lower().lstrip(".") or "jpg"
    if ext not in _ALLOWED_EXTENSIONS:
        raise ValueError(f"unsupported image extension: {ext}")
    return f"users/{user_id}/{uuid4()}.{ext}"
