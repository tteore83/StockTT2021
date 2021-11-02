-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 11 oct. 2021 à 19:22
-- Version du serveur : 5.7.33
-- Version de PHP : 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `stock`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` double NOT NULL,
  `reference` text NOT NULL,
  `denomination` varchar(255) NOT NULL,
  `prix` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `reference`, `denomination`, `prix`) VALUES
(11, 'REF00202', 'Chaise en sapin et rotin', '60.00'),
(12, 'REF00203', 'Chaise en sapin, rotin et cuire', '75.00'),
(13, 'REF00201', 'Chaise en sapin', '45.00'),
(14, 'REF00002', 'Table en sapin', '375.00'),
(15, 'REF00001', 'Table en bois massif', '500.00'),
(16, 'REF00101', 'Chaise en bois massif', '100.00'),
(17, 'REF00003', 'Table en fer forgé et plateau en verre', '1000.00'),
(18, 'REF00301', 'Chaise en fer forgé', '220.00'),
(19, 'REF00404', 'Chaise en  PVC', '20.00'),
(20, 'REF00505', 'Table en  PVC', '60.00');

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `idstock` int(11) NOT NULL,
  `referencearticle` text NOT NULL,
  `quantite` int(11) NOT NULL,
  `datestock` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`idstock`, `referencearticle`, `quantite`, `datestock`) VALUES
(1, 'REF00202', 80, '2021-08-30 22:00:00'),
(2, 'REF00203', 80, '2021-08-30 22:00:00'),
(3, 'REF00201', 80, '2021-08-30 22:00:00'),
(4, 'REF00002', 8, '2021-08-30 22:00:00'),
(5, 'REF00001', 16, '2021-08-30 22:00:00'),
(6, 'REF00101', 100, '2021-08-30 22:00:00'),
(7, 'REF00003', 10, '2021-08-30 22:00:00'),
(8, 'REF00301', 75, '2021-08-30 22:00:00'),
(9, 'REF00404', 63, '2021-08-30 22:00:00'),
(10, 'REF00505', 55, '2021-08-30 22:00:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`idstock`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `idstock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
