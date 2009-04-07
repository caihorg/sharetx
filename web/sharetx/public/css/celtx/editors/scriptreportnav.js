/* ***** BEGIN LICENCE BLOCK *****
 * Version: CePL 1.1
 * 
 * The contents of this file are subject to the Celtx Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.celtx.com/CePL/
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 * 
 * The Original Code is Celtx Script Manager.
 * 
 * The Initial Developer of the Original Code is Chad House and 4067479
 * Canada Inc. t/a CELTX.
 * 
 * Portions created by Chad House are Copyright (C) 2000-2004 Chad House,
 * parts created by Celtx are Copyright (C) 4067479 Canada Inc. All Rights
 * Reserved.
 * 
 * Contributor(s):
 *
 ***** END LICENCE BLOCK ***** */

var gWindow;

function loaded () {
  gWindow = new Object;

  gWindow.reportTree = document.getElementById("report-tree");
}


function selectReportIndex (index) {
  gWindow.reportTree.view.selection.select(0);
}


function getSelectedReportIndex () {
  return gWindow.reportTree.view.selection.currentIndex;
}


function getSelectedReportName () {
  var idx = getSelectedReportIndex();
  var cols = gWindow.reportTree.columns;
  return gWindow.reportTree.view.getCellText(idx, cols.getFirstColumn());
}
