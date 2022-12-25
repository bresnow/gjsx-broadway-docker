import Gjsx from 'gi://Gjsx';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk?version=4.0';


const Template =
    <interface>
        <template class="GWindow">
            <property name="titlebar">
                <object class="GtkHeaderBar">
                    <property name="title-widget">
                        <object class="GtkStackSwitcher">
                            <property name="stack">viewStack</property>
                        </object>
                    </property>
                </object>
            </property>
            <property name="child">
                <object class="GtkStack" id="viewStack">
                    <child>
                        <object class="GtkStackPage">
                            <property name="name">welcome</property>
                            <property name="title">Welcome</property>
                            <property name="child">
                                <object class="GtkLabel">
                                    <property name="label">Welcome to our new file browser!</property>
                                    <property name="valign">center</property>
                                    <style>
                                        <class name="big" />
                                    </style>
                                </object>
                            </property>
                        </object>
                    </child>
                    <child>
                        <object class="GtkStackPage">
                            <property name="name">files</property>
                            <property name="title">Files</property>
                            <property name="child">
                                <object class="GtkLabel">
                                    <property name="label">Welcome to our new file browser!</property>
                                    <property name="valign">center</property>
                                    <style>
                                        <class name="big" />
                                    </style>
                                </object>
                            </property>
                        </object>
                    </child>
                </object>
            </property>
        </template>
    </interface>


export const Window = GObject.registerClass({
    GTypeName: 'GWindow',
    Template,
    InternalChildren: ['viewStack'],
}, class extends Gtk.ApplicationWindow {
    _viewStack: Gtk.Stack   
    constructor(params: Gtk.ApplicationWindow_ConstructProps) {
        super(params);
        this.#setupActions();
        this.#bindSizeToSettings();
    }

    _vfunc_close_request() {
        super.vfunc_close_request();
        this.run_dispose();
    }

    #setupActions() {
        // Create the action
        const changeViewAction = new Gio.SimpleAction({
            name: 'change-view',
            parameter_type: GLib.VariantType.new('s'),
        });

        // Connect to the activate signal to run the callback
        changeViewAction.connect('activate', (_action, params) => {
            this._viewStack.visible_child_name = params.get_string()[0];
        });

        // Add the action to the window
        this.add_action(changeViewAction);
    }

    #bindSizeToSettings() {
        this.set_decorated(false);
        this.maximize();
    }
});
