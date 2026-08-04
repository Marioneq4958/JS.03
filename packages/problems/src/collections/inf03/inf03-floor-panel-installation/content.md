# Koszt montażu paneli podłogowych (`INF.03-02-25.01-SG`)

Dla fragmentu strony utwórz skrypt, którego wymagania opisano poniżej.

- Wykonywany po stronie klienta, [...] po kliknięciu przycisku „Oblicz”
- Należy stosować znaczące nazewnictwo zmiennych i funkcji w języku polskim lub angielskim
- Skrypt pobiera dane z pól edycyjnych i pól opcji
- Jeżeli oba pola edycyjne zostały wypełnione, skrypt
  - Oblicza pole powierzchni pomieszczenia
  - Oblicza koszt montażu uwzględniając pole powierzchni oraz typ panelu i koszt z tabeli 1
  - W paragrafie pod przyciskiem wyświetla napis: „Pole powierzchni pomieszczenia: \<pole\>, koszt montażu \<koszt\>”, gdzie pola <> oznaczają wartości obliczone skryptem
- W przeciwnym wypadku skrypt wyświetla komunikat "Wprowadź poprawne dane."

**Tabela1. Koszt montażu**

| Rodzaj panelu    | Koszt montażu (zł/m<sup>2</sup>) |
| ---------------- | -------------------------------- |
| panel laminowany | 12                               |
| panel winylowy   | 14                               |
| deska podłogowa  | 18                               |

<details class="source-info">
<summary>Źródła i dodatkowe informacje</summary>

> **Źródła**: Wymagania dotyczące skryptu (w formie listy punktowanej) oraz tabela 1 są fragmentem arkusza `INF.03-02-25.01-SG` dostępnego m.in. pod adresem <https://chr1skyy.github.io/Egzamin-Zawodowy-E14-EE09-INF03/inf03/inf03_2025_01_02/inf_03_2025_01_02_SG.pdf>. Szablon, przykładowa odpowiedź oraz testy zostały przygotowane na potrzeby platformy.

> **Wskazówka do testów:** Dla poprawnego działania testów, należy nie usuwać/zmieniać identyfikatorów `szerokosc`, `dlugosc`, `laminowane`, `winylowe`, `deska`, `przycisk`, `wynik`.

</details>
