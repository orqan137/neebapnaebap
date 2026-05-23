from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "NeebapNaebap API"
    environment: str = "local"
    database_url: str = "postgresql+psycopg://neebap:neebap@localhost:5432/neebapnaebap"
    s3_endpoint_url: str | None = "http://localhost:9000"
    s3_bucket: str = "neebapnaebap-local"
    s3_access_key_id: str = "minioadmin"
    s3_secret_access_key: str = "minioadmin"
    s3_region: str = "ap-northeast-2"

    model_config = SettingsConfigDict(env_file=".env", env_prefix="NEEBAP_", extra="ignore")


settings = Settings()
