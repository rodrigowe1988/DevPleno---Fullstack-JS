-- MySQL Script generated by MySQL Workbench
-- Tue Nov 23 17:26:15 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cadastro
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cadastro
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cadastro` DEFAULT CHARACTER SET utf8 ;
USE `cadastro` ;

-- -----------------------------------------------------
-- Table `cadastro`.`pessoas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cadastro`.`pessoas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(145) NOT NULL,
  `nascimento` DATE NOT NULL,
  `cargo` VARCHAR(145) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cadastro`.`projetos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cadastro`.`projetos` (
  `id` INT NOT NULL,
  `nome` VARCHAR(145) NOT NULL,
  `dono_id` INT NOT NULL,
  `gerente_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_projetos_pessoas_idx` (`dono_id` ASC) VISIBLE,
  INDEX `fk_projetos_pessoas1_idx` (`gerente_id` ASC) VISIBLE,
  CONSTRAINT `fk_dono`
    FOREIGN KEY (`dono_id`)
    REFERENCES `cadastro`.`pessoas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_gerente`
    FOREIGN KEY (`gerente_id`)
    REFERENCES `cadastro`.`pessoas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
