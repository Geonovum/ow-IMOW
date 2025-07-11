#
# Het onderstaande commando haalt alle Constraints uit de markdown bestanden
# van het IMOW.
#
# **Constraint**: Een validatieregel begint op een regel met **Regel:** en eindigt bij de
# eerste lege regel.
#
constraints.md: 01-Inleiding.md 04-Implementatie.md 05-GebruikIMOW.md 06-OPinIMOW.md A1-Changelog.md Makefile text2constraint.py ConstraintsUitCatalogus.md
	echo '| Nummer | Tekst |' > constraints.md
	echo '| ------ | ----- |' >> constraints.md
	cat 01-Inleiding.md 04-Implementatie.md 05-GebruikIMOW.md 06-OPinIMOW.md A1-Changelog.md | ./text2constraint.py >> constraints.md
	cat ConstraintsUitCatalogus.md >> constraints.md
