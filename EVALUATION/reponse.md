1. La Blockchain est un réseau... (1 point)
Décentralisé

2. Quelles technologies sont généralement utilisées par une blockchain ? (1 point)
Toutes les réponses précédentes

3. Dans un système d'accounting, comment sont gérés les soldes des utilisateurs ? (1 point)
Par des contrats intelligents

4. Laquelle de ces propositions décrit le mieux la Proof of Work ? (1 point)
Un mécanisme de consensus basé sur la résolution de puzzles cryptographiques

5. Quel est le rôle des mineurs dans une blockchain ? (1 point)
Vérifier les transactions et créer de nouveaux blocs

6. Qu'est-ce qu'un bloc dans une blockchain ? (1 point)
Un groupe de transactions

7. Quel algorithme de consensus est utilisé par Bitcoin ? (1 point)
Proof of Work

8. Quel est le principal objectif des signatures dans une blockchain ? (1 point)
Authentifier l'identité de l'émetteur d'une transaction

(Fin QCM)  
9.  Analysez le code disponible à l'url suivante: https://github.com/bendahmanem/ISITECH-2324-RPI-D-Blockchain-Exam, décrivez-le et proposez un usage à ce code. (3 points)
Ceci est un  smart contract rédigé en solidity. il prend en paramètre la note maximale pour un examen et la note pour obtenir l'examen, et l'adresse du créateur du contrat défini le professeur. Seul le professeur peut attribuer des notes à des élèves et tout le monde peut obtenir la note d'un élève ou si l'élève à obtenu une note suffisante pour l'examen.

Un professeur peut se servir de ce smart contract pour certifier l'obtention d'un examen pour un élève.

10. A quoi sert l'instruction : "uint public passingMarks;" ? (2 points)
uint public passingMarks permet de définir la note minimal pour obtenir l'examen

11. Décrivez les étapes qui permettent d'utiliser ce code en "production". (3 points)


12. Peut-on librement utiliser la fonction submitMarks ? Pourquoi ? (3 points)
la fonction submitMarks ne peut être librement. Seul le professeur peut noter des élèves, tant que la note de l'élève n'est pas supérieur à la note maximale de l'examen.

13. A quoi sert la fonction getMarks ? Qui peut appeler cette fonction ? (3 points)
la fonction getMarks est utilisable par tout le monde et elle permet d'obtenir la note d'un élève.

14. Identifiez deux moyens d'améliorer cette fonction, proposez un noveau code source pour la fonction améliorée. (3 points)
on peut vérifier si l'adresse de l'étudiant est valide ou limite l'accès de la consultation de la note au professeur ou l'étudiant

```js
function getMarks(address student) external view returns (uint) {
    require(msg.sender == teacher || msg.sender == student, "Only the teacher or the student can view the mark");
    require(student != address(0), "Unknow student");
    return marks[student];
}
```

15. Expliquer en quoi la blockchain serait un avantage pour le contexte d'utilisation du code présenté. (2 points)
La blockchain permettrai d'authentifier et certifier l'obtention d'un examen mais aussi rendre disponible en ligne l'accès de la note à l'étudiant ou le professeur, mais aussi la disponibilité de consulté l'obtention de l'examen par un tiers 

16. Nous souhaitons pouvoir changer de professeur comment faire ? (3 points)
En créant un nouveau contrat de zéro (long et inefficace) ou bien en créant une fonction pour changer le professeur du contrat courant :

```js
function changeTeacher(address newTeacher) external {
    require(newTeacher != address(0), "Invalid teacher address");
    require(msg.sender == teacher, "Only teacher can change the teacher");
    require(newTeacher != teacher, "You are already the teacher");
    teacher = newTeacher;
}
```