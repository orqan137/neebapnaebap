from uuid import UUID

from app.domain.battles import BattleDomain, VoteCategory
from app.domain.images import build_image_key


def test_build_image_key_uses_user_and_uuid_extension():
    key = build_image_key(user_id="user_123", filename="pick.Png")

    prefix, user_id, object_name = key.split("/", 2)
    object_id, ext = object_name.rsplit(".", 1)

    assert prefix == "users"
    assert user_id == "user_123"
    assert UUID(object_id)
    assert ext == "png"


def test_battle_domain_counts_votes_by_category_and_picks_winners():
    domain = BattleDomain(
        entries=["entry_a", "entry_b"],
        categories=[VoteCategory.VIBE, VoteCategory.VALUE, VoteCategory.USEFULNESS],
    )

    domain.cast_vote(voter_id="u1", category=VoteCategory.VIBE, entry_id="entry_a")
    domain.cast_vote(voter_id="u2", category=VoteCategory.VIBE, entry_id="entry_a")
    domain.cast_vote(voter_id="u1", category=VoteCategory.VALUE, entry_id="entry_b")
    domain.cast_vote(voter_id="u2", category=VoteCategory.VALUE, entry_id="entry_b")
    domain.cast_vote(voter_id="u1", category=VoteCategory.USEFULNESS, entry_id="entry_b")

    result = domain.results()

    assert result.category_winners[VoteCategory.VIBE] == "entry_a"
    assert result.category_winners[VoteCategory.VALUE] == "entry_b"
    assert result.category_winners[VoteCategory.USEFULNESS] == "entry_b"
    assert result.overall_winner == "entry_b"


def test_voter_can_only_vote_once_per_category():
    domain = BattleDomain(entries=["entry_a", "entry_b"], categories=[VoteCategory.VIBE])

    domain.cast_vote(voter_id="u1", category=VoteCategory.VIBE, entry_id="entry_a")

    try:
        domain.cast_vote(voter_id="u1", category=VoteCategory.VIBE, entry_id="entry_b")
    except ValueError as exc:
        assert "already voted" in str(exc)
    else:
        raise AssertionError("expected duplicate vote to fail")
