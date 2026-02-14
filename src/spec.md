# Specification

## Summary
**Goal:** Replace the acceptance-state meme image with the user-uploaded image and rename the deployment to “myvalentinepiku” with an updated share link.

**Planned changes:**
- Update the acceptance-state `<img>` (at `/html/body/div/div/main/div/div[2]/img[1]`) to use the newly uploaded image as a static asset from `frontend/public/assets/generated`.
- Rename/change the deployed app/domain label to `myvalentinepiku` and produce a single updated share link for the renamed deployment.

**User-visible outcome:** After tapping “Yes,” the acceptance screen shows the newly uploaded image (and only that image changes), and the app can be shared via the updated `myvalentinepiku` link.
