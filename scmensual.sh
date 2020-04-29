#!/bin/bash
##Backup sitio WEB 1
DIR=/home/backups/semanal/web1/


cd $(DIR)
mkdir $(date +%F)
chmod 777 $(date +%F) 
tar -zcvf ./$(date +%F)/WEB1_$(date +%F).tar.gz /var/www/sitio1/htdocs

## Backup Sitio WEB 2##
DIR2=/home/backups/semanal/web2/
cd $(DIR2)
mkdir $(date +%F)
chmod 777 $(date +%F)
tar -zcvf ./$(date +%F)/WEB2_$(date +%F).tar.gz /var/www/sitio2/htdocs

##Backup de base de datos#
DIRSQL=/home/backups/semanal/SQL/
USER=
PASSWORD=
BASE1=
BASE2=
cd $(DIRSQL)

mkdir $(date +%F)
chmod 777 $(date +%F)
cd $(date +%F)

mysqldump -u $(USER) -p $(PASSWORD) --opt $(BASE1) > $(BASE1).sql
tar -zcvf $(BASE1)_$(date +%F).tar.gz $(BASE1).sql;

mysqldump -u $(USER) -p $(PASSWORD) --opt $(BASE2) > $(BASE2).sql
tar -zcvf $(BASE2)_$(date +%F).tar.gz $(BASE2).sql;
rm *.sql
