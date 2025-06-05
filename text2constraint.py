#!/usr/bin/python3
#
# WAT: Script dat constraints uit markdown filtert!
# Auteur: Wilko Quak
#
# Input: markdown bestand.
# Output: tabelvulling.
#
# Hoe ziet een constraint eruit:
# - Een constraint begin met een regel met  **Constraint:** aan het begin.
# - Een constraint bevat ergens identificatie van de vorm (TPOD9999).
# - Een constraint eindig met een lege regel.
#
# Hoe moet de constraint eruit zien in de validatiematrix?
# - In de validatiematrix zit de constraint in twee kolommen. (1) identficatie
#   van de constraint. (2) tekst van de constraint.
#
# Wat moet de conversie doen:
# - Lees het inputbestanden. Als je een regel tegenkomt die met **Constraint:**
#   begint. 
# - Zolang je niet bij EOF of een lege regel bent: kopieer alle tekst naar een
#   string. Zonder de newlines
# - Zoek in de string met een reguliere express naar de identificatie van de
#   constraint
# - Maak de eerste letter uppercase.
# - print '|' + id + '|' + tekst + '|'.
#
import sys
import re

# print("# validaties IMOW")
# print("")
# print("| id | omschrijving |")
# print("|----|--------------|")

inconstraint = False

for line in sys.stdin:
    line = line.rstrip()
    #print ( "regel: " + str(len(line)) + ':'  + line)
    if line.startswith('**Constraint:**'):
        if inconstraint == True:
            print("ERROR een constraint begint in een andere constraint")
        inconstraint = True
        constraint = ""

    if (inconstraint):
        if len(line) == 0:
             idpattern = re.search('\(TPOD[0-9][0-9][0-9][0-9]\)',constraint)
             if idpattern is None:
                 id = 'TODO9999'
             else:
                 id = idpattern.group()[1:9]
             constraint = constraint.replace('**Constraint:**','')
             constraint = constraint.replace('(' + id + ')',' ')
             print("| {} | {} |".format(id ,constraint))
             inconstraint = False
        else:
             constraint = constraint + line
