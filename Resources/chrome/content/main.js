/*
R53 Fox - a GUI client of Amazon Route 53
Copyright (C) 2011 Genki Sugawara

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

Components.utils.import('resource://r53fox/preferences.jsm');

function onLoad() {
  $exp = new Exporter();
  $imp = new Importer($exp);

  var tree = $('hosted-zone-tree');
  $view = new HostedZoneTreeView();
  tree.view = $view;
  $view.refresh();
}

function editAccount() {
  openModalDialog('account-dialog');
  $view.refresh();
}

function about() {
  openModalDialog('about-dialog');
}
