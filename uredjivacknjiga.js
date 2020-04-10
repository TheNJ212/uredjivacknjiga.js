var knjige=require('../ListaKnjiga/listaknjiga')
let lista=knjige.ListaKnjiga

exports.sveKnjige= ()=>{
    return lista;
}

exports.addKnjiga = (id, naziv, autor)=>{
    if(lista.find(x=>x.id==id)==undefined) lista.push({'id':id,'naziv':naziv,'autor':autor});
    else console.log('Vec postoji knjiga sa tim id');
}

exports.getKnjiga = (id)=>{
    return lista.find(x=>x.id==id);
}

exports.postaviAutora = (naziv,autor)=>{
    let lst=lista.filter(x=>x.naziv==naziv);
    lst.forEach(knjiga => {
        knjiga.autor=autor;
    });
}

exports.deleteKnjiga =(id)=>{
     lista=lista.filter(x=>x.id!=id);
}

exports.getKnjigaByAuthor =(author)=>{
    return lista.filter(x=>x.autor==author);
}