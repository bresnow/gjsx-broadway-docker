
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "gjsx";
import { encode } from '../../lib/util.js';
import { getGtkVersion } from '../../lib/util.js';
import { BoxContainer } from './box_container.js';
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
            </child>
        </object>

    </interface>
const stack_resource =
    <interface>
        <object class="GtkStackSwitcher" id="stack_switch">
            <property name="stack" >viewStack</property>
        </object>
        <object class="GtkStack" id="viewStack">
            <child>
                <object class="GtkStackPage" id="page1">
                    <property name="name">welcome</property>
                    <property name="title">Welcome</property>
                    <property name="child">
                 

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

const overlay_resource = {
    widget: <interface>
        <object class="GtkOverlay" id="overlay">
        </object>
    </interface>,
    overlay: <interface><object class="GtkImage" id="picture">
        <property name="file">/home/app/assets/images/carbone-fiber-background.jpg</property>
    </object></interface>
}
export const TopOverlay = GObject.registerClass({}, class extends Gtk.Overlay {
    _init() {
        super._init();
        let [builderOvelayPic, picture, getPictureObject] = build<Gtk.Image>("picture", builder(overlay_resource.overlay));
        picture.set_pixel_size(1000)
        this.set_child(picture)
        // this.set_clip_overlay(picture, true)
    }
    append(widget: Gtk.Widget) {
        this.add_overlay(widget)

    }
})
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

