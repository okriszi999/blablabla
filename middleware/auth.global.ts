import { useSession } from "@/lib/auth/client";

export default defineNuxtRouteMiddleware(async (to, _) => {
  const { data: session } = await useSession(useFetch);
  if (!session.value) {
    if (to.path === "/feed") {
      const message = encodeURIComponent(
        "You must be signed in to view the feed."
      );
      return navigateTo(`/sign-in?message=${message}`);
    }
  }
});
