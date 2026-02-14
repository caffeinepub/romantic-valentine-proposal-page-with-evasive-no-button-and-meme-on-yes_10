# Specification

## Summary
**Goal:** Build a single-page Valentine proposal experience with a pink-and-white theme, an evasive “No” button, and a “Yes” success state showing a meme and the text “Good choice”.

**Planned changes:**
- Create a centered romantic proposal card/section that asks “Will you be my Valentine?” with “Yes” and “No” buttons in a consistent pink-and-white theme.
- Add client-side interaction so the “No” button relocates to a random position within a bounded container on hover (desktop) and on touch/press (mobile), preventing clicks while keeping layout stable.
- Implement a “Yes” click/tap success state that replaces/transitions from the question view to a view showing the text “Good choice” (exact capitalization) and a bundled static meme image.
- Ensure everything runs purely on the client with no backend APIs required and remains usable on Android Chrome without horizontal scrolling.

**User-visible outcome:** Users can open a single interactive Valentine page, try (and fail) to click “No” as it moves away, and click “Yes” to see a success screen with “Good choice” and a meme image.
