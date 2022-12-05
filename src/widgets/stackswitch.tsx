
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "gjsx";
import { encode } from '../../lib/util.js';
const { build, builder } = Gjsx
const grid_resource =
    <interface>
        <object class="GtkGrid" id="grid_root">
            <child>
                <object class="GtkLabel" id="description">
                    <property name="label">Description</property>
                    <layout>
                        <property name="column">0</property>
                        <property name="row">0</property>
                        <property name="row-span">1</property>
                        <property name="column-span">1</property>
                    </layout>
                </object>
            </child>
            <child>
                <object class="GtkEntry" id="tag_search">
                    <layout>
                        <property name="column">1</property>
                        <property name="row">0</property>
                        <property name="row-span">1</property>
                        <property name="column-span">1</property>
                    </layout>
                </object>
            </child>
        </object>

    </interface>
const stack_resource =
    <interface>
        <object class="GtkStack" id="viewStack">
            <child>
                <object class="GtkStackPage" id="page1">
                    <property name="name">welcome</property>
                    <property name="title">Welcome</property>
                    <property name="child">
                        <object class="GtkBox" id="entry_box">
                            <property name="layout-manager">
                                <object class="GtkBoxLayout">
                                    <property name="orientation">vertical</property>
                                </object>
                            </property>
                            <child>
                                <object class="GtkEntry" id="vs_entry">
                                    <property name="valign">center</property>
                                    <style>
                                        <class name="big" />
                                    </style>
                                </object>
                            </child>
                        </object>

                    </property>
                </object>
            </child>
            <child>
                <object class="GtkStackPage" id="page2">
                    <property name="name">files</property>
                    <property name="title">Files</property>
                    <property name="child">
                        <object class="GtkLabel">
                            <property name="label">We will display files here</property>
                        </object>
                    </property>
                </object>
            </child>
        </object>
    </interface>

export const StackSwitch = GObject.registerClass({}, class extends Gtk.Box {
    _init(): void {
        super._init();
        const { Align, Orientation, EntryIconPosition } = Gtk
        this.valign = Align.FILL;
        this.orientation = Orientation.VERTICAL;
        let [builderStack, stack, getStackObject] = build<Gtk.Stack>("viewStack", builder(stack_resource));
        let [builderGrid, grid, getGridObject] = build<Gtk.Grid>("grid_root", builder(grid_resource));
        this.gridSettings(grid);
        let entry = getGridObject<Gtk.Entry>("tag_search");
        entry.set_icon_from_icon_name(EntryIconPosition.PRIMARY, "fullscreen")
        grid.attach(stack, 1, 1, 1, 1);
        this.append(grid);
    }

    gridSettings(grid: Gtk.Grid) {
        grid.set_column_homogeneous(true);
        grid.set_row_homogeneous(true);
        grid.set_vexpand(true);
        grid.set_hexpand(true);

    }

})

