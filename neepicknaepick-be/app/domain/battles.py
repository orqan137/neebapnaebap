from collections import Counter, defaultdict
from dataclasses import dataclass
from enum import StrEnum


class VoteCategory(StrEnum):
    VIBE = "vibe"
    VALUE = "value"
    USEFULNESS = "usefulness"


@dataclass(frozen=True)
class BattleResults:
    counts: dict[VoteCategory, dict[str, int]]
    category_winners: dict[VoteCategory, str | None]
    overall_winner: str | None


class BattleDomain:
    """Pure domain model for friend-powered pick battles.

    A voter can cast one vote per category. Category winners receive one overall point;
    the overall winner is the entry with the most category wins. Ties are returned as None.
    """

    def __init__(self, entries: list[str], categories: list[VoteCategory]) -> None:
        if len(entries) < 2:
            raise ValueError("battle needs at least two entries")
        self.entries = set(entries)
        self.categories = set(categories)
        self._votes: dict[tuple[str, VoteCategory], str] = {}

    def cast_vote(self, voter_id: str, category: VoteCategory, entry_id: str) -> None:
        if category not in self.categories:
            raise ValueError(f"unknown category: {category}")
        if entry_id not in self.entries:
            raise ValueError(f"unknown entry: {entry_id}")
        key = (voter_id, category)
        if key in self._votes:
            raise ValueError(f"voter {voter_id} already voted for {category}")
        self._votes[key] = entry_id

    def results(self) -> BattleResults:
        counts: dict[VoteCategory, Counter[str]] = defaultdict(Counter)
        for (_, category), entry_id in self._votes.items():
            counts[category][entry_id] += 1

        category_winners: dict[VoteCategory, str | None] = {}
        overall_points: Counter[str] = Counter()
        for category in self.categories:
            winner = _single_winner(counts[category])
            category_winners[category] = winner
            if winner is not None:
                overall_points[winner] += 1

        return BattleResults(
            counts={category: dict(counter) for category, counter in counts.items()},
            category_winners=category_winners,
            overall_winner=_single_winner(overall_points),
        )


def _single_winner(counter: Counter[str]) -> str | None:
    if not counter:
        return None
    [(top_entry, top_count), *rest] = counter.most_common()
    if rest and rest[0][1] == top_count:
        return None
    return top_entry
