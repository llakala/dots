" System clipboard always
set clipboard=unnamed
noremap p "+p

" Have j and k navigate visual lines rather than logical ones
nmap j gj
nmap k gk
vmap j gj
vmap k gk

" Select line with x
nnoremap x V
vnoremap x j

" Delete current character, and don't copy to clipboard
noremap d "_x

" Redo
noremap U <C-r>

" Change, and don't copy to clipboard
noremap c "_s

" Go to beginning/end of visual line. W gets nothing.
noremap H g^
noremap L g$
noremap W <Nop>


" Let us use Ctrl+q to quit
unmap <C-q>

" Alt to use WORDS, not Shift
noremap <A-e> E
noremap <A-w> W
noremap <A-b> B

" Fold and unfold
exmap foldtoggle obcommand editor:toggle-fold
nmap z :foldtoggle<CR>

" Select entire file
noremap % ggVG

" Keep selection when copying or indenting
noremap y ygv
noremap < <gv
noremap > >gv

" gG to go to end of file
noremap gG G

exmap nextHeading obcommand obsidian-editor-shortcuts:goToNextHeading
exmap prevHeading obcommand obsidian-editor-shortcuts:goToPrevHeading
noremap <A-j> :nextHeading<cr>
noremap <A-k> :prevHeading<cr>
