import { createClient as serverCreateClient } from "@/_lib/supabase/server";
import { createClient as clientCreateClient } from "@/_lib/supabase/client";

export const createClient =
  typeof window === "undefined" ? serverCreateClient : clientCreateClient;
