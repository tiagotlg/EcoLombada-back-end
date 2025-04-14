import supabase from '../supabase.js';
import { StatusUsuario } from '../utils/enums/index.js';

export const buscarTodosUsuarios = async () => {
  return await supabase.from('usuario').select('*').eq('status', StatusUsuario.ATIVO);
};

export const buscarUsuarioPorId = async (id) => {
  return await supabase.from('usuario').select('*').eq('id', id).single();
};

export const adicionarNovoUsuario = async (usuario) => {
  return await supabase.from('usuario').insert([usuario]);
};

export const atualizarUsuario = async (id, dados) => {
  return await supabase.from('usuario').update(dados).eq('id', id);
};

export const deletarUsuario = async (id) => {
  return await supabase.from('usuario').delete().eq('id', id);
};

export const excluirUsuarioStatus = async (id) => {
  const { data, error } = await supabase
    .from('usuario')
    .update({ status: StatusUsuario.DELETADO })
    .eq('id', id);

  return { data, error };
};

export const buscarUsuarioPorEmail = async (email) => {
  const { data, error } = await supabase
    .from('usuario')
    .select('*')
    .eq('email', email)
    .maybeSingle(); 

  return { data, error };
};