

prompt_content(){
 if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
  prompt_segment black default "😄"
 fi
}
