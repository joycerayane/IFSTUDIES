-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Jul-2020 às 20:09
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ifstudies`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbassunto`
--

CREATE TABLE `tbassunto` (
  `cod_assunto` int(11) NOT NULL,
  `nome_assunto` varchar(50) NOT NULL,
  `cod_disciplina` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbdisciplina`
--

CREATE TABLE `tbdisciplina` (
  `cod_disciplina` tinyint(4) NOT NULL,
  `nome_disciplina` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbestudante`
--

CREATE TABLE `tbestudante` (
  `cod_estudante` varchar(50) NOT NULL,
  `nome_estudante` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbestudanteassunto`
--

CREATE TABLE `tbestudanteassunto` (
  `finalizado` int(11) NOT NULL,
  `cod_estudante` varchar(50) NOT NULL,
  `cod_assunto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbquestoes`
--

CREATE TABLE `tbquestoes` (
  `cod_questoes` int(11) NOT NULL,
  `texto` mediumtext NOT NULL,
  `alternativa_a` varchar(1000) NOT NULL,
  `alternativa_b` varchar(1000) NOT NULL,
  `alternativa_c` varchar(1000) NOT NULL,
  `alternativa_d` varchar(1000) NOT NULL,
  `alternativa_e` varchar(1000) DEFAULT NULL,
  `alternativa_correta` char(1) DEFAULT NULL,
  `cod_assunto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbassunto`
--
ALTER TABLE `tbassunto`
  ADD PRIMARY KEY (`cod_assunto`),
  ADD KEY `FK_AssuntoDisciplina` (`cod_disciplina`);

--
-- Índices para tabela `tbdisciplina`
--
ALTER TABLE `tbdisciplina`
  ADD PRIMARY KEY (`cod_disciplina`);

--
-- Índices para tabela `tbestudante`
--
ALTER TABLE `tbestudante`
  ADD PRIMARY KEY (`cod_estudante`);

--
-- Índices para tabela `tbestudanteassunto`
--
ALTER TABLE `tbestudanteassunto`
  ADD KEY `FK_Estudante` (`cod_estudante`),
  ADD KEY `FK_Assunto` (`cod_assunto`);

--
-- Índices para tabela `tbquestoes`
--
ALTER TABLE `tbquestoes`
  ADD PRIMARY KEY (`cod_questoes`),
  ADD KEY `FK_QuestoesAssunto` (`cod_assunto`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tbassunto`
--
ALTER TABLE `tbassunto`
  ADD CONSTRAINT `FK_AssuntoDisciplina` FOREIGN KEY (`cod_disciplina`) REFERENCES `tbdisciplina` (`cod_disciplina`);

--
-- Limitadores para a tabela `tbestudanteassunto`
--
ALTER TABLE `tbestudanteassunto`
  ADD CONSTRAINT `FK_Assunto` FOREIGN KEY (`cod_assunto`) REFERENCES `tbassunto` (`cod_assunto`),
  ADD CONSTRAINT `FK_Estudante` FOREIGN KEY (`cod_estudante`) REFERENCES `tbestudante` (`cod_estudante`);

--
-- Limitadores para a tabela `tbquestoes`
--
ALTER TABLE `tbquestoes`
  ADD CONSTRAINT `FK_QuestoesAssunto` FOREIGN KEY (`cod_assunto`) REFERENCES `tbassunto` (`cod_assunto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
