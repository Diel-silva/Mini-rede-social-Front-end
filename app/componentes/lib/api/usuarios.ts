import { typeUsuarios } from "@/app/types/types";

export async function usuarioFindAll(): Promise<typeUsuarios[] | undefined> {
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'GET'
        }
        )
        if (response.ok) {
            const data: typeUsuarios[] = await response.json();
            return data;
        }
    } catch {
        alert('Erro ao busca usuários')
        return [];
    }
}

export async function usuarioUpdate(id: number, body: typeUsuarios | undefined): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            const data: typeUsuarios = await response.json()
            return data
        }
    } catch {
        alert('Erro ao busca usuários')
        return undefined;
    }
}

export async function usuarioDelete(id: number): Promise<typeUsuarios | undefined> {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const data: typeUsuarios = await response.json()
            return data
        }
    } catch {
        alert('Erro ao busca usuários')
        return undefined
    }
}

export async function usuarioCreate(body: any): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            const data = await response.json()
            return data
        }
    } catch {
        alert('Erro ao busca usuários')
        return []
    }
}