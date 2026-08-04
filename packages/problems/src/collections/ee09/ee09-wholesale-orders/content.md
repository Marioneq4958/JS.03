# Zamówienia hurtowe (`EE.09-04-22.06-SG`)

Dla fragmentu strony utwórz skrypt, którego wymagania opisano poniżej.

- Napisany w języku JavaScript.
- Składa się z funkcji aktualizującej i zamawiającej obsługujących przyciski oraz funkcji zaznaczającej braki.
- Na początku działania skryptu jest wywoływana funkcja zaznaczająca braki oraz zainicjowana jest wartością 0 zmienna przechowująca id zamówienia
- Funkcja zaznaczająca braki [...]
  - Sprawdza wartości w kolumnie „Dostępna Ilość" dla każdego wiersza tabeli
  - Jeżeli wartość jest równa 0, tło tej komórki zmienione jest na czerwone
  - Jeżeli wartość jest z przedziału <1, 5>, tło tej komórki zmienione jest na żółte
  - W każdym innym przypadku tło komórki jest koloru Honeydew
- Funkcja aktualizująca [...]
  - Wywoływana po przyciśnięciu przycisku w danym wierszu tabeli
  - Wyświetla okno z polem do wpisania wartości, podpisane: „Podaj nową ilość:"
  - Podaną w oknie wartość wpisuje do odpowiedniego wiersza, kolumny „Dostępna ilość"
  - Wywołuje funkcję zaznaczającą braki
- Funkcja zamawiająca [...]
  - Zwiększa o jeden id zamówienia
  - Wyświetla komunikat o treści: „Zamówienie nr: \<id zamówienia\> Produkt: \<nazwa produktu\>", gdzie pola w <> wypełniane są automatycznie wartością id zamówienia oraz nazwą produktu z kolumny „Produkt" danego wiersza tabeli

<details class="source-info">
<summary>Źródła i dodatkowe informacje</summary>

> **Źródła**: Wymagania dotyczące skryptu (w formie listy punktowanej) są fragmentem arkusza `EE.09-04-22.06-SG` dostępnego m.in. pod adresem <https://chr1skyy.github.io/Egzamin-Zawodowy-E14-EE09-INF03/ee09/ee09_2022_06_04/ee_09_2022_06_04_SG.pdf>. Szablon, przykładowa odpowiedź oraz testy zostały przygotowane na potrzeby platformy.

> **Wskazówka do testów:** Dla poprawnego działania testów, należy nie usuwać/zmieniać identyfikatorów komórek tabeli (`dostepna0`, `dostepna1`, `dostepna2`, `dostepna3`, `produkt0`, `produkt1`, `produkt2`, `produkt3`).

</details>
