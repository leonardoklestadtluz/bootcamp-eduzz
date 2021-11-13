-- buscar registros
SELECT * FROM pessoas;
SELECT nome FROM pessoas;
SELECT nome, nascimento FROM pessoas;

-- atualizar registros
UPDATE pessoas SET nome='Oni';
UPDATE pessoas SET nome='Oni' WHERE id=1;

-- deletar registros (SEM RECUPERAÇÃO DO REGISTRO)
DELETE FROM pessoas WHERE id=1;

-- ordenar registros
SELECT * FROM pessoas ORDER BY nome ASC -- ordenação de forma crescente
SELECT * FROM pessoas ORDER BY nome DESC -- ordenação de forma decrescente

-- agrupar registros
SELECT COUNT(qtd), GENERO FROM pessoas GROUP BY genero