from fastapi import APIRouter

from app.schemas.core import BattleCreateRequest, VoteRequest

router = APIRouter(prefix="/battles", tags=["battles"])


@router.post("")
def create_battle(payload: BattleCreateRequest) -> dict[str, object]:
    return {
        "id": "local-battle",
        "group_id": payload.group_id,
        "title": payload.title,
        "categories": payload.categories,
        "status": "collecting_entries",
    }


@router.post("/{battle_id}/votes")
def cast_vote(battle_id: str, payload: VoteRequest) -> dict[str, str]:
    return {
        "battle_id": battle_id,
        "category": payload.category,
        "selected_entry_id": payload.selected_entry_id,
        "status": "accepted",
    }


@router.post("/{battle_id}/share-requests")
def request_community_share(battle_id: str) -> dict[str, str]:
    return {"battle_id": battle_id, "status": "pending_friend_consensus"}
