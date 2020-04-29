#!/bin/bash
## CREA BACKUPS en la CARPETA ubicada en /home/backups/SQL/
DIR=
USER=
PASSWORD=
BASE=
cd $(DIR)
mysqldump -u $(USER) -p $(PASSWORD) --opt $(BASE) > $(BASE).sql
tar -zcvf $(BASE)_$(date +%F_%H-%M).tar.gz $(BASE).sql;
chmod 666 $(BASE).sql
rm $(BASE).sql