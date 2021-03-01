export interface ResponseDominio{

    codigo: number,
    nomeLogico: string	
}

export interface ResponseValores{

    codigo: number,
    nome: string
}

export interface RequestCriaValor{

    nome: string,
    codigoGenerico: string
}

export interface ResponseCriaValor{

    nome: string,
    codigoGenerico: string,
    codigoDominio: number
    
    }

export interface RequestCriaDominio {
    codigoDominio: number,
	nomeTabelaFisico: string ,
	nomeLogico: string,
	nomeCodigoFisico: string ,
	nomeColunaFisco: string
}
