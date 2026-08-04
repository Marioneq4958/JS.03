<script setup lang="ts">
import BasePanel from './BasePanel.vue';

defineProps<{ params: { onClose: () => void } }>();
</script>

<template>
  <BasePanel title="Ściąga" @close="params.onClose">
    <div class="p-4 text-sm cheat-sheet overflow-y-auto">
      <p class="my-1 font-semibold text-base">Wybrane pola i metody modelu DOM języka JavaScript</p>
      <table>
        <thead>
          <tr>
            <th>Wyszukiwanie elementów</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              document.getElementById(id)<br />
              document.getElementsByTagName(TagName)<br />
              document.getElementsByClassName(ClassName)<br />
              document.getElementsByName(ElementName)<br />
              document.querySelector(CSS selector)<br />
              document.querySelectorAll(CSS selector)
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Zmiana elementów</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              element.innerHTML = "nowa wartość"<br />
              element.attribute_name = "nowa wartość"<br />
              element.setAttribute(atrybut, wartosc)<br />
              element.style.property_name = "nowa wartość"
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Operacje na elementach dokumentu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              document.createElement(element)<br />
              document.removeChild(element)<br />
              document.appendChild(element)<br />
              document.replaceChild(element)<br />
              document.write(text)
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Wybrane właściwości obiektu style</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              backgroundColor<br />
              color<br />
              fontSize<br />
              fontStyle = "normal | italic | oblique | initial | inherit"<br />
              fontWeight = "normal | lighter | bold | bolder | value | initial | inherit"<br />
              listStyleType = "circle | decimal | disc | none | square | initial..."
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colspan="3">Wybrane zdarzenia HTML</th>
          </tr>
          <tr>
            <th>Zdarzenia myszy</th>
            <th>Zdarzenia klawiatury</th>
            <th>Zdarzenia obiektów</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              onclick<br />
              ondblclick<br />
              onmouseover<br />
              onmouseout
            </td>
            <td>
              onkeydown<br />
              onkeypress<br />
              onkeyup
            </td>
            <td>
              onload<br />
              onresize<br />
              onfocusin<br />
              onfocusout
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Elementy formularzy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Ważniejsze typy pola Input:</strong> button, checkbox, number, password, radio, text<br />
              <strong>Inne elementy:</strong> select, textarea
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Metody i pola obiektu string (JS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Length<br />
              indexOf(text)<br />
              search(text)<br />
              substr(startIndex, endIndex)<br />
              replace(textToReplace, newText)<br />
              toUpperCase()<br />
              toLowerCase()
            </td>
          </tr>
        </tbody>
      </table>

      <p class="mt-5 text-xs text-muted-foreground">
        Powyższa treść jest fragmentem arkusza CKE INF.03-09-24.06-SG dostępnego m.in. na
        <a
          class="underline"
          href="https://chr1skyy.github.io/Egzamin-Zawodowy-E14-EE09-INF03/inf03/inf03_2024_06_09/inf_03_2024_06_09_SG.pdf"
          target="_blank"
        >
          https://chr1skyy.github.io/Egzamin-Zawodowy-E14-EE09-INF03/inf03/inf03_2024_06_09/inf_03_2024_06_09_SG.pdf </a
        >.
        <strong>
          Arkusze INF.03, w których trzeba wykonać skrypt w JavaScript zazwyczaj zawierają taką treść lub podobną.
        </strong>
        <span class="underline">Układ i kolorystyka zostały zmodyfikowane na potrzeby platformy.</span>
      </p>
    </div>
  </BasePanel>
</template>
