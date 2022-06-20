/*********** Reset ***********/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/*
***** INDICE ***** 

#1 | Container

#2 | Row & Columns
[2.1] - Offset 
[2.2] - Gutter 

#3 | Display

#4 | Flex
[4.1] - Main Axis
[4.2] - Secondary Axis
[4.3] - Both Axis

#5 | Padding & Margin
[5.1] - Only X Axis
[5.2] - Only Y Axis

***** INDICE ***** 
*/


/*********** Utilities | Mobile First (View XS < 576px) ***********/

/*********** #1 | Container ***********/
.container{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.container-fluid{
  width: 100%;
  max-width: 1200px;
}



/*********** #2 | Row & Columns ***********/
.row {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

.row > [class^="col"] {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
}

/* Generics Column */
.row > .col {
  max-width: 100%;
  flex-grow: 1;
}

/* Columns from 1 to 12 */
.row > .col-xs-1 {
  flex-basis: calc(100% / 12);
  max-width: calc(100% / 12);
}

.row > .col-xs-2 {
  flex-basis: calc(100% / 12 * 2);
  max-width: calc(100% / 12 * 2);
}

.row > .col-xs-3 {
  flex-basis: 25%;
  max-width: 25%;
}

.row > .col-xs-4 {
  flex-basis: calc(100% / 12 * 4);
  max-width: calc(100% / 12 * 4);
}

.row > .col-xs-5 {
  flex-basis: calc(100% / 12 * 5);
  max-width: calc(100% / 12 * 5);
}

.row > .col-xs-6 {
  flex-basis: 50%;
  max-width: 50%;
}

.row > .col-xs-7 {
  flex-basis: calc(100% / 12 * 7);
  max-width: calc(100% / 12 * 7);
}

.row > .col-xs-8 {
  flex-basis: calc(100% / 12 * 8);
  max-width: calc(100% / 12 * 8);
}

.row > .col-xs-9 {
  flex-basis: 75%;
  max-width: 75%;
}

.row > .col-xs-10 {
  flex-basis: calc(100% / 12 * 10);
  max-width: calc(100% / 12 * 10);
}

.row > .col-xs-11 {
  flex-basis: calc(100% / 12 * 11);
  max-width: calc(100% / 12 * 11);
}

.row > .col-xs-12 {
  flex-basis: 100%;
  max-width: 100%;
}

/* [2.1] Offset */
.offset-xs-0 {margin-left: 0;}
.offset-xs-1 {margin-left: calc(100% / 12);}
.offset-xs-2 {margin-left: calc(100% / 12 * 2);}
.offset-xs-3 {margin-left: 25%;}
.offset-xs-4 {margin-left: calc(100% / 12 * 4);}
.offset-xs-5 {margin-left: calc(100% / 12 * 5);}
.offset-xs-6 {margin-left: 50%;}
.offset-xs-7 {margin-left: calc(100% / 12 * 7);}
.offset-xs-8 {margin-left: calc(100% / 12 * 8);}
.offset-xs-9 {margin-left: 75%;}
.offset-xs-10 {margin-left: calc(100% / 12 * 10);}
.offset-xs-11 {margin-left: calc(100% / 12 * 11);}
.offset-xs-12 {margin-left: 100%;}

/* [2.2] Gutter */
.row.g-xs-0 {margin: 0;}

.row.g-xs-1 {margin: 0 -10px;}
.row.g-xs-1 > [class^="col"] {margin: 0 10px;}

.row.g-xs-2 {margin: 0 -20px;}
.row.g-xs-2 > [class^="col"] {margin: 0 20px;}

.row.g-xs-3 {margin: 0 -30px;}
.row.g-xs-3 > [class^="col"] {margin: 0 30px;}


/*********** #3 | Display ***********/
.d-xs-none {display: none;}
.d-xs-block {display: block;}
.d-xs-inline {display: inline;}
.d-xs-inline-block {display: inline-block;}
.d-xs-flex {display: flex;}



/*********** #4 | Flex ***********/
/* Flex Direction */
.flex-xs-row-rev {flex-direction: row-reverse;}
.flex-xs-col {flex-direction: column;}
.flex-xs-col-rev {flex-direction: column-reverse;}

/* Flex Wrap */
.flex-xs-wrap {flex-wrap: wrap;}
.flex-xs-nowrap {flex-wrap: nowrap;}
.flex-xs-wrap-rev {flex-wrap: wrap-reverse;}

/* [4.1] Main Axis */
/* Justify Content */
.justify-xs-start {justify-content: flex-start;}
.justify-xs-center {justify-content: center;}
.justify-xs-end {justify-content: flex-end;}
.justify-xs-baseline {justify-content: baseline;}
.justify-xs-around {justify-content: space-around;}
.justify-xs-between {justify-content: space-between;}
.justify-xs-evenly {justify-content: space-evenly;}

/* [4.2] Cross Axis */
/* Align Items */
.align-xs-start {align-items: flex-start;}
.align-xs-center {align-items: center;}
.align-xs-end {align-items: flex-end;}
.align-xs-baseline {align-items: baseline;}
.align-xs-stretch {align-items: stretch;}

/* Align Content */
.content-xs-start {align-content: flex-start;}
.content-xs-center {align-content: center;}
.content-xs-end {align-content: flex-end;}
.content-xs-baseline {align-content: baseline;}
.content-xs-around {align-content: space-around;}
.content-xs-between {align-content: space-between;}
.content-xs-evenly {align-content: space-evenly;}
.content-xs-stretch {align-content: stretch;}

/* Align Self */
.self-xs-start {align-self: flex-start;}
.self-xs-center {align-self: center;}
.self-xs-end {align-self: flex-end;}
.self-xs-baseline {align-self: baseline;}
.self-xs-stretch {align-self: stretch;}

/* [3.3] Both Axis */
/* Flex Grow */
[class^="col"].grow-xs-0 {flex-grow: 0;}
[class^="col"].grow-xs-1 {flex-grow: 1;}

/* Flex Shrink */
[class^="col"].shrink-xs-0 {flex-shrink: 0;}
[class^="col"].shrink-xs-1 {flex-shrink: 1;}

/* Items Order */
.order-xs--1 {order: -1;}
.order-xs-0 {order: 0;}
.order-xs-1 {order: 1;}
.order-xs-2 {order: 2;}


/*********** #4 | Padding & Margin ***********/
.p-xs-10 {padding: 10px;}
.p-xs-20 {padding: 20px;}
.p-xs-30 {padding: 30px;}

.m-xs-10 {margin: 10px;}
.m-xs-20 {margin: 20px;}
.m-xs-30 {margin: 30px;}

/* [4.1] Only X Axis */
.px-xs-10 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-xs-20 {
  padding-left: 20px;
  padding-right: 20px;
}
.px-xs-30 {
  padding-left: 30px;
  padding-right: 30px;
}

.mx-xs-10 {
  margin-left: 10px;
  margin-right: 10px;
}
.mx-xs-20 {
  margin-left: 20px;
  margin-right: 20px;
}
.mx-xs-30 {
  margin-left: 30px;
  margin-right: 30px;
}

/* [4.2] Only Y Axis */
.py-xs-10 {
  padding-top: 10px;
  padding-bottom: 10px;
}
.py-xs-20 {
  padding-top: 20px;
  padding-bottom: 20px;
}
.py-xs-30 {
  padding-top: 30px;
  padding-bottom: 30px;
}

.my-xs-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.my-xs-20 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.my-xs-30 {
  margin-top: 30px;
  margin-bottom: 30px;
}


/*********** Media Query Responsive Layout ***********/

/*********** Responsive View SM >= 576px ***********/
@media screen and (min-width: 576px) {}

/*********** Responsive View MD >= 768px ***********/
@media screen and (min-width: 768px) {}

/*********** Responsive View LG >= 992px ***********/
@media screen and (min-width: 992px) {}

/*********** Responsive View XL >= 1200px ***********/
@media screen and (min-width: 1200px) {}

/*********** Responsive View XXL >= 1400px ***********/
@media screen and (min-width: 1400px) {}