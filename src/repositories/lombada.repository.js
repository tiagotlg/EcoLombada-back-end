import supabase from "../supabase.js";
import { StatusLombada } from "../utils/enums/index.js";

export const buscarTodasLombadas = async () => {
  return await supabase
    .from("lombada")
    .select("*")
    .neq("status", StatusLombada.DELETADO);
};

export const buscarLombadaPorId = async (id) => {
  return await supabase
    .from("lombada")
    .select("*")
    .eq("id", id)
    .single();
};

export const adicionarLombada = async (dados) => {
  return await supabase.from("lombada").insert([dados]);
};

export const atualizarLombada = async (id, dados) => {
  return await supabase
    .from("lombada")
    .update(dados)
    .eq("id", id)
    .select()
    .single();
};

export const deletarLombada = async (id) => {
  return await supabase.from("lombada").delete().eq("id", id);
};

export const excluirLombadaStatus = async (id) => {
  return await supabase
    .from("lombada")
    .update({ status: StatusLombada.CANCELADA })
    .eq("id", id)
    .select()
    .maybeSingle();
};
