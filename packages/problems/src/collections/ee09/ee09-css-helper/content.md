# Pomocnik CSS (`EE.09-02-22.06-SG`)

Dla fragmentu strony utwórz skrypt, którego wymagania opisano poniżej.

- Napisany w języku JavaScript
- Składa się z funkcji wywoływanej po wciśnięciu przycisku
- Pobiera wartość wpisaną w polu edycyjnym
- Ustala tło w formacie HSL dla komórek tabeli. Składowa H odpowiada wartości pobranej z pola edycyjnego, wartość L jest stała i wynosi zawsze 50%, wartość S jest różna dla poszczególnych komórek tabeli i wynosi:
  - dla pierwszego wiersza 100%
  - dla drugiego wiersza, kolejno w czterech komórkach: 80%, 60%, 40% i 20%

**Tabela 2. Sposoby reprezentacji koloru w stylach CSS**

| Sposób          | Składnia                     | Przykład JS                                          |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| Nazwa           | Nazwa_koloru                 | _element.style.backgroundColor = 'SteelBlue';_       |
| Heksadecymalnie | #rrggbb (wartości hex 00-FF) | _element.style.color = '#FFFFFF';_                   |
| RGB             | rgb(wartR, wartG, wartB)     | _element.style.backgroundColor = 'rgb(10, 20, 30)';_ |
| HSL             | hsl(wartH, wartS%, wartL%)   | _element.style.color = 'hsl(30, 100%, 50%)';_        |

<details class="source-info">
<summary>Źródła i dodatkowe informacje</summary>

> **Źródła**: Wymagania dotyczące skryptu (w formie listy punktowanej) oraz tabela 2 są fragmentem arkusza `EE.09-02-22.06-SG` dostępnego m.in. pod adresem <https://chr1skyy.github.io/Egzamin-Zawodowy-E14-EE09-INF03/ee09/ee09_2022_06_02/ee_09_2022_06_02_SG.pdf>. Szablon, przykładowa odpowiedź oraz testy zostały przygotowane na potrzeby platformy.

> **Wskazówka do testów:** Dla poprawnego działania testów, należy nie usuwać/zmieniać identyfikatorów `h-skladnik`, `przycisk`, `k1`, `k2`, `k3`, `k4`, `k5`.

</details>
