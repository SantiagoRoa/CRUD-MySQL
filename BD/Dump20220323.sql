-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: polizas
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contacto`
--

DROP TABLE IF EXISTS `contacto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacto` (
  `id` int NOT NULL,
  `doc_persona` int NOT NULL,
  `id_tipo` int NOT NULL,
  `valor` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `con_tip_fk` (`id_tipo`),
  KEY `con_per_fk` (`doc_persona`),
  CONSTRAINT `con_per_fk` FOREIGN KEY (`doc_persona`) REFERENCES `persona` (`documento`),
  CONSTRAINT `con_tip_fk` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_contacto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacto`
--

LOCK TABLES `contacto` WRITE;
/*!40000 ALTER TABLE `contacto` DISABLE KEYS */;
INSERT INTO `contacto` VALUES (412,1322132,132,'5000000');
/*!40000 ALTER TABLE `contacto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `documento` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  PRIMARY KEY (`documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1322132,'Nelson Santiago','Roa Garzón');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poliza`
--

DROP TABLE IF EXISTS `poliza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poliza` (
  `idPoliza` int NOT NULL AUTO_INCREMENT,
  `Ciudad` varchar(45) NOT NULL,
  `Cobertura` varchar(45) NOT NULL,
  `ValorAsegurado` int NOT NULL,
  `Tomador_idDocTomador` int NOT NULL,
  `Vehiculo_idVehiculo` int NOT NULL,
  `Vehiculo_Tomador_idDocTomador` int NOT NULL,
  PRIMARY KEY (`idPoliza`,`Tomador_idDocTomador`),
  KEY `fk_Poliza_Tomador1_idx` (`Tomador_idDocTomador`),
  KEY `fk_Poliza_Vehiculo2_idx` (`Vehiculo_idVehiculo`,`Vehiculo_Tomador_idDocTomador`),
  CONSTRAINT `fk_Poliza_Tomador1` FOREIGN KEY (`Tomador_idDocTomador`) REFERENCES `tomador` (`idDocTomador`),
  CONSTRAINT `fk_Poliza_Vehiculo2` FOREIGN KEY (`Vehiculo_idVehiculo`, `Vehiculo_Tomador_idDocTomador`) REFERENCES `vehiculo` (`idVehiculo`, `Tomador_idDocTomador`)
) ENGINE=InnoDB AUTO_INCREMENT=413 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poliza`
--

LOCK TABLES `poliza` WRITE;
/*!40000 ALTER TABLE `poliza` DISABLE KEYS */;
INSERT INTO `poliza` VALUES (412,'Bogotá','Completa',200000,10,55,10);
/*!40000 ALTER TABLE `poliza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefono`
--

DROP TABLE IF EXISTS `telefono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefono` (
  `idTelefono` int NOT NULL AUTO_INCREMENT,
  `numero` int NOT NULL,
  `Tomador_idDocTomador` int NOT NULL,
  PRIMARY KEY (`idTelefono`,`Tomador_idDocTomador`),
  KEY `fk_Telefono_Tomador1_idx` (`Tomador_idDocTomador`),
  CONSTRAINT `fk_Telefono_Tomador1` FOREIGN KEY (`Tomador_idDocTomador`) REFERENCES `tomador` (`idDocTomador`)
) ENGINE=InnoDB AUTO_INCREMENT=1216 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefono`
--

LOCK TABLES `telefono` WRITE;
/*!40000 ALTER TABLE `telefono` DISABLE KEYS */;
INSERT INTO `telefono` VALUES (431,1233456,10);
/*!40000 ALTER TABLE `telefono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_contacto`
--

DROP TABLE IF EXISTS `tipo_contacto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_contacto` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_contacto`
--

LOCK TABLES `tipo_contacto` WRITE;
/*!40000 ALTER TABLE `tipo_contacto` DISABLE KEYS */;
INSERT INTO `tipo_contacto` VALUES (132,'Prueba','Descripcion de prueba');
/*!40000 ALTER TABLE `tipo_contacto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tomador`
--

DROP TABLE IF EXISTS `tomador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tomador` (
  `idDocTomador` int NOT NULL AUTO_INCREMENT,
  `Nombres` varchar(45) NOT NULL,
  `TipoDoc` varchar(45) NOT NULL,
  `Direccion` varchar(45) DEFAULT NULL,
  `Correo` varchar(45) NOT NULL,
  PRIMARY KEY (`idDocTomador`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tomador`
--

LOCK TABLES `tomador` WRITE;
/*!40000 ALTER TABLE `tomador` DISABLE KEYS */;
INSERT INTO `tomador` VALUES (10,'Nelson Santiago Roa Garzón','CC','Teusaquillo','santiago@correo.com');
/*!40000 ALTER TABLE `tomador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculo`
--

DROP TABLE IF EXISTS `vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehiculo` (
  `idVehiculo` int NOT NULL AUTO_INCREMENT,
  `tipoVehiculo` varchar(45) NOT NULL,
  `placa` varchar(45) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `año` int NOT NULL,
  `uso` varchar(45) NOT NULL,
  `Tomador_idDocTomador` int NOT NULL,
  PRIMARY KEY (`idVehiculo`,`Tomador_idDocTomador`),
  KEY `fk_Vehiculo_Tomador1_idx` (`Tomador_idDocTomador`),
  CONSTRAINT `fk_Vehiculo_Tomador1` FOREIGN KEY (`Tomador_idDocTomador`) REFERENCES `tomador` (`idDocTomador`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculo`
--

LOCK TABLES `vehiculo` WRITE;
/*!40000 ALTER TABLE `vehiculo` DISABLE KEYS */;
INSERT INTO `vehiculo` VALUES (55,'carro','ABC123','Mazda','Allegro',2008,'Particular',10);
/*!40000 ALTER TABLE `vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-23 23:14:00
