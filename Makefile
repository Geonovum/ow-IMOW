#
# Het onderstaande commando haalt alle Constraints uit de markdown bestanden
# van het IMOW.
#
# **Constraint**: Een validatieregel begint op een regel met **Regel:** en eindigt bij de
# eerste lege regel.
#
constraints.txt: 01-Inleiding.md 04-Implementatie.md 05-GebruikIMOW.md 06-OPinIMOW.md A1-Changelog.md Makefile
	cat *md | pcregrep -o  -M '\*\*Constraint:\*\*(\n|.)*?^$$'  > constraints.txt
