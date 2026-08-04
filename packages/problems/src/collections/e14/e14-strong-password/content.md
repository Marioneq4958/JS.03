# Weryfikacja jakości hasła (`E.14-02-16.08`)

Dla fragmentu strony utwórz skrypt, którego działanie opisano poniżej.

- pobiera hasło z pola tekstowego
- sprawdza warunki jakości hasła zapisane w tabeli 1
- wypisuje w panelu prawym pod polem tekstowym treść:
  - "HASŁO JEST PUSTE" czcionką w kolorze czerwonym, jeżeli nic nie jest wpisane w polu tekstowym
  - "HASŁO JEST SŁABE" czcionką koloru żółtego, jeśli hasło spełnia warunki hasła słabego
  - "HASŁO JEST ŚREDNIE" czcionką koloru niebieskiego, jeśli hasło spełnia warunki hasła średniego
  - "HASŁO JEST DOBRE" czcionką koloru zielonego, jeśli hasło spełnia warunki hasła dobrego

**Tabela 1. Zasady tworzenia hasła**

| Jakość hasła | Opis                                                        |
| ------------ | ----------------------------------------------------------- |
| dobre        | długość 7 znaków i wiecej, zawiera przynajmniej jedną cyfrę |
| średnie      | długość 4 do 6 znaków, zawiera przynajmniej jedną cyfrę     |
| słabe        | inne przypadki                                              |

<details class="source-info">
<summary>Źródła i dodatkowe informacje</summary>

> **Źródła**: Opis działania skryptu (w formie listy punktowanej) oraz tabela 1 są fragmentem arkusza `E.14-02-16.08` dostępnego m.in. pod adresem <https://egzamin-informatyk.pl/arkusz-praktyczny-e14-2016-10-02/>. Szablon, przykładowa odpowiedź oraz testy zostały przygotowane na potrzeby platformy.

> **Wskazówka do testów:** Dla poprawnego działania testów, należy nie usuwać/zmieniać identyfikatorów `haslo`, `przycisk`, `wynik`.

</details>
