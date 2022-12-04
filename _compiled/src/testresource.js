import Gjsx from "../lib/gjsx/index.js";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk?version=3.0";
import GLib from "gi://GLib";
import Gst from "gi://Gst";
import Gettext from "gettext";
import _ from "@gi-types/gmodule";
const Ui = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "template",
    {
      class: "Gjs_Row",
      parent: "GtkListBoxRow",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      {
        name: "selectable",
      },
      "False"
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "style",
      null,
      /* @__PURE__ */ Gjsx.createWidget("class", {
        name: "recording-row",
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        {
          class: "GtkBox",
        },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "margin_top",
          },
          "12"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "margin_bottom",
          },
          "12"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "orientation",
          },
          "vertical"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "child",
          null,
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            {
              class: "GtkStack",
              id: "mainStack",
            },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              {
                name: "margin_start",
              },
              "14"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              {
                name: "margin_end",
              },
              "14"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "child",
              null,
              /* @__PURE__ */ Gjsx.createWidget(
                "object",
                {
                  class: "GtkStackPage",
                },
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  {
                    name: "name",
                  },
                  "display"
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  {
                    name: "child",
                  },
                  /* @__PURE__ */ Gjsx.createWidget(
                    "object",
                    {
                      class: "GtkBox",
                    },
                    /* @__PURE__ */ Gjsx.createWidget(
                      "property",
                      {
                        name: "valign",
                      },
                      "center"
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "property",
                      {
                        name: "hexpand",
                      },
                      "True"
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "child",
                      null,
                      /* @__PURE__ */ Gjsx.createWidget(
                        "object",
                        {
                          class: "GtkBox",
                        },
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "orientation",
                          },
                          "vertical"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkLabel",
                              id: "name",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "ellipsize",
                              },
                              "end"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "single_line_mode",
                              },
                              "True"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "xalign",
                              },
                              "0"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "style",
                              null,
                              /* @__PURE__ */ Gjsx.createWidget("class", {
                                name: "heading",
                              })
                            )
                          )
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkLabel",
                              id: "date",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "margin_top",
                              },
                              "4"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "xalign",
                              },
                              "0"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "style",
                              null,
                              /* @__PURE__ */ Gjsx.createWidget("class", {
                                name: "subtitle",
                              })
                            )
                          )
                        )
                      )
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "child",
                      null,
                      /* @__PURE__ */ Gjsx.createWidget(
                        "object",
                        {
                          class: "GtkLabel",
                          id: "duration",
                        },
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "hexpand",
                          },
                          "True"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "halign",
                          },
                          "end"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "use_markup",
                          },
                          "True"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "style",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget("class", {
                            name: "numeric",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "child",
              null,
              /* @__PURE__ */ Gjsx.createWidget(
                "object",
                {
                  class: "GtkStackPage",
                },
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  {
                    name: "name",
                  },
                  "edit"
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  {
                    name: "child",
                  },
                  /* @__PURE__ */ Gjsx.createWidget(
                    "object",
                    {
                      class: "GtkEntry",
                      id: "entry",
                    },
                    /* @__PURE__ */ Gjsx.createWidget(
                      "property",
                      {
                        name: "activates_default",
                      },
                      "True"
                    )
                  )
                )
              )
            )
          )
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "child",
          null,
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            {
              class: "GtkRevealer",
              id: "revealer",
            },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              {
                name: "transition_duration",
              },
              "250"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              {
                name: "transition_type",
              },
              "GTK_REVEALER_TRANSITION_TYPE_SLIDE_DOWN"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "child",
              null,
              /* @__PURE__ */ Gjsx.createWidget(
                "object",
                {
                  class: "GtkBox",
                },
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  {
                    name: "orientation",
                  },
                  "vertical"
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "child",
                  null,
                  /* @__PURE__ */ Gjsx.createWidget(
                    "object",
                    {
                      class: "GtkStack",
                      id: "waveformStack",
                    },
                    /* @__PURE__ */ Gjsx.createWidget(
                      "property",
                      {
                        name: "transition_type",
                      },
                      "crossfade"
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "child",
                      null,
                      /* @__PURE__ */ Gjsx.createWidget(
                        "object",
                        {
                          class: "GtkStackPage",
                        },
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "name",
                          },
                          "loading"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "child",
                          },
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkSpinner",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "spinning",
                              },
                              "True"
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "child",
                  null,
                  /* @__PURE__ */ Gjsx.createWidget(
                    "object",
                    {
                      class: "GtkBox",
                    },
                    /* @__PURE__ */ Gjsx.createWidget(
                      "property",
                      {
                        name: "margin_start",
                      },
                      "14"
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "property",
                      {
                        name: "margin_end",
                      },
                      "14"
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "property",
                      {
                        name: "margin_top",
                      },
                      "18"
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "child",
                      null,
                      /* @__PURE__ */ Gjsx.createWidget(
                        "object",
                        {
                          class: "GtkBox",
                          id: "deleteBtnBox",
                        },
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkButton",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "valign",
                              },
                              "center"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "halign",
                              },
                              "center"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "action_name",
                              },
                              "recording.delete"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "receives_default",
                              },
                              "True"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "tooltip_text",
                                translatable: "yes",
                              },
                              "Delete"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "icon_name",
                              },
                              "user-trash-symbolic"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "style",
                              null,
                              /* @__PURE__ */ Gjsx.createWidget("class", {
                                name: "circular",
                              })
                            )
                          )
                        )
                      )
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "child",
                      null,
                      /* @__PURE__ */ Gjsx.createWidget(
                        "object",
                        {
                          class: "GtkBox",
                          id: "playbackControls",
                        },
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "hexpand",
                          },
                          "True"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "halign",
                          },
                          "end"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "spacing",
                          },
                          "18"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkButton",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "valign",
                              },
                              "center"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "halign",
                              },
                              "center"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "action_name",
                              },
                              "recording.seek-backward"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "receives_default",
                              },
                              "True"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "tooltip_text",
                                translatable: "yes",
                              },
                              "Seek 10s Backward"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "icon_name",
                              },
                              "skip-back-symbolic"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "style",
                              null,
                              /* @__PURE__ */ Gjsx.createWidget("class", {
                                name: "circular",
                              })
                            )
                          )
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkStack",
                              id: "playbackStack",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "child",
                              null,
                              /* @__PURE__ */ Gjsx.createWidget(
                                "object",
                                {
                                  class: "GtkStackPage",
                                },
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "name",
                                  },
                                  "play"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "child",
                                  },
                                  /* @__PURE__ */ Gjsx.createWidget(
                                    "object",
                                    {
                                      class: "GtkButton",
                                      id: "playBtn",
                                    },
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "valign",
                                      },
                                      "center"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "halign",
                                      },
                                      "center"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "receives_default",
                                      },
                                      "True"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "action_name",
                                      },
                                      "recording.play"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "tooltip_text",
                                        translatable: "yes",
                                      },
                                      "Play"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "child",
                                      null,
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "object",
                                        {
                                          class: "GtkImage",
                                        },
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "icon_name",
                                          },
                                          "media-playback-start-symbolic"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "pixel_size",
                                          },
                                          "24"
                                        )
                                      )
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "style",
                                      null,
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "class",
                                        {
                                          name: "circular",
                                        }
                                      ),
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "class",
                                        {
                                          name: "large",
                                        }
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "child",
                              null,
                              /* @__PURE__ */ Gjsx.createWidget(
                                "object",
                                {
                                  class: "GtkStackPage",
                                },
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "name",
                                  },
                                  "pause"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "child",
                                  },
                                  /* @__PURE__ */ Gjsx.createWidget(
                                    "object",
                                    {
                                      class: "GtkButton",
                                      id: "pauseBtn",
                                    },
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "valign",
                                      },
                                      "center"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "halign",
                                      },
                                      "center"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "action_name",
                                      },
                                      "recording.pause"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "receives_default",
                                      },
                                      "True"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "tooltip_text",
                                        translatable: "yes",
                                      },
                                      "Pause"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "child",
                                      null,
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "object",
                                        {
                                          class: "GtkImage",
                                        },
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "icon_name",
                                          },
                                          "media-playback-pause-symbolic"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "pixel_size",
                                          },
                                          "24"
                                        )
                                      )
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "style",
                                      null,
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "class",
                                        {
                                          name: "circular",
                                        }
                                      ),
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "class",
                                        {
                                          name: "large",
                                        }
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkButton",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "valign",
                              },
                              "center"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "halign",
                              },
                              "center"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "action_name",
                              },
                              "recording.seek-forward"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "receives_default",
                              },
                              "True"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "tooltip_text",
                                translatable: "yes",
                              },
                              "Seek 10s Forward"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "icon_name",
                              },
                              "skip-forward-symbolic"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "style",
                              null,
                              /* @__PURE__ */ Gjsx.createWidget("class", {
                                name: "circular",
                              })
                            )
                          )
                        )
                      )
                    ),
                    /* @__PURE__ */ Gjsx.createWidget(
                      "child",
                      null,
                      /* @__PURE__ */ Gjsx.createWidget(
                        "object",
                        {
                          class: "GtkStack",
                          id: "rightStack",
                        },
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "hexpand",
                          },
                          "True"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "property",
                          {
                            name: "halign",
                          },
                          "end"
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkStackPage",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "name",
                              },
                              "options"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "child",
                              },
                              /* @__PURE__ */ Gjsx.createWidget(
                                "object",
                                {
                                  class: "AdwSqueezer",
                                },
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "homogeneous",
                                  },
                                  "True"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "child",
                                  null,
                                  /* @__PURE__ */ Gjsx.createWidget(
                                    "object",
                                    {
                                      class: "GtkBox",
                                    },
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "spacing",
                                      },
                                      "8"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "child",
                                      null,
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "object",
                                        {
                                          class: "GtkButton",
                                        },
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "valign",
                                          },
                                          "center"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "halign",
                                          },
                                          "center"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "receives_default",
                                          },
                                          "True"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "tooltip_text",
                                            translatable: "yes",
                                          },
                                          "Export"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "action_name",
                                          },
                                          "recording.export"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "icon_name",
                                          },
                                          "document-save-symbolic"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "style",
                                          null,
                                          /* @__PURE__ */ Gjsx.createWidget(
                                            "class",
                                            {
                                              name: "circular",
                                            }
                                          )
                                        )
                                      )
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "child",
                                      null,
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "object",
                                        {
                                          class: "GtkButton",
                                        },
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "valign",
                                          },
                                          "center"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "halign",
                                          },
                                          "center"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "receives_default",
                                          },
                                          "True"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "tooltip_text",
                                            translatable: "yes",
                                          },
                                          "Rename"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "action_name",
                                          },
                                          "recording.rename"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "property",
                                          {
                                            name: "icon_name",
                                          },
                                          "document-edit-symbolic"
                                        ),
                                        /* @__PURE__ */ Gjsx.createWidget(
                                          "style",
                                          null,
                                          /* @__PURE__ */ Gjsx.createWidget(
                                            "class",
                                            {
                                              name: "circular",
                                            }
                                          )
                                        )
                                      )
                                    )
                                  )
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "child",
                                  null,
                                  /* @__PURE__ */ Gjsx.createWidget(
                                    "object",
                                    {
                                      class: "GtkMenuButton",
                                    },
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "receives_default",
                                      },
                                      "True"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "menu_model",
                                      },
                                      "optionMenu"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "halign",
                                      },
                                      "end"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "valign",
                                      },
                                      "center"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "property",
                                      {
                                        name: "icon_name",
                                      },
                                      "view-more-symbolic"
                                    ),
                                    /* @__PURE__ */ Gjsx.createWidget(
                                      "style",
                                      null,
                                      /* @__PURE__ */ Gjsx.createWidget(
                                        "class",
                                        {
                                          name: "circular",
                                        }
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        /* @__PURE__ */ Gjsx.createWidget(
                          "child",
                          null,
                          /* @__PURE__ */ Gjsx.createWidget(
                            "object",
                            {
                              class: "GtkStackPage",
                            },
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "name",
                              },
                              "save"
                            ),
                            /* @__PURE__ */ Gjsx.createWidget(
                              "property",
                              {
                                name: "child",
                              },
                              /* @__PURE__ */ Gjsx.createWidget(
                                "object",
                                {
                                  class: "GtkButton",
                                  id: "saveBtn",
                                },
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "valign",
                                  },
                                  "center"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "halign",
                                  },
                                  "end"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "receives_default",
                                  },
                                  "False"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "tooltip_text",
                                    translatable: "yes",
                                  },
                                  "Save"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "action_name",
                                  },
                                  "recording.save"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "property",
                                  {
                                    name: "icon_name",
                                  },
                                  "emblem-ok-symbolic"
                                ),
                                /* @__PURE__ */ Gjsx.createWidget(
                                  "style",
                                  null,
                                  /* @__PURE__ */ Gjsx.createWidget("class", {
                                    name: "circular",
                                  }),
                                  /* @__PURE__ */ Gjsx.createWidget("class", {
                                    name: "suggested-action",
                                  })
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  ),
  /* @__PURE__ */ Gjsx.createWidget(
    "menu",
    {
      id: "optionMenu",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "section",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "item",
        null,
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          {
            name: "action",
          },
          "recording.rename"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          {
            name: "label",
            translatable: "yes",
          },
          "Rename"
        )
      ),
      /* @__PURE__ */ Gjsx.createWidget(
        "item",
        null,
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          {
            name: "action",
          },
          "recording.export"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          {
            name: "label",
            translatable: "yes",
          },
          "Export"
        )
      )
    )
  ),
  /* @__PURE__ */ Gjsx.createWidget(
    "object",
    {
      class: "GtkSizeGroup",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "widgets",
      null,
      /* @__PURE__ */ Gjsx.createWidget("widget", {
        name: "rightStack",
      }),
      /* @__PURE__ */ Gjsx.createWidget("widget", {
        name: "deleteBtnBox",
      })
    )
  )
);
export const Mystree = GObject.registerClass(
  {
    GTypeName: "Gjs_Row",
    Template: Gjsx.renderUi(/* @__PURE__ */ Gjsx.createWidget(Ui, null)),
  },
  class extends Gtk.ListBoxRow {}
);
var formatTime = (nanoSeconds) => {
  const time = new Date(0, 0, 0, 0, 0, 0, parseInt(nanoSeconds, Gst.MSECOND));
  const miliseconds = parseInt(
    time.getMilliseconds().toString(),
    100
  ).toString();
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const hours = time.getHours().toString().padStart(2, "0");
  return `${hours}\u200A\u2236\u200A${minutes}\u200A\u2236\u200A${seconds}\u200A.\u200A<small>${miliseconds}</small>`;
};
var displayDateTime = (time) => {
  const DAY = 864e8;
  const now = GLib.DateTime.new_now_local();
  const difference = now.difference(time);
  const days = Math.floor(difference / DAY);
  const weeks = Math.floor(difference / (7 * DAY));
  const months = Math.floor(difference / (30 * DAY));
  const years = Math.floor(difference / (365 * DAY));
  if (difference < DAY) return time.format("%X");
  else if (difference < 2 * DAY) return _("Yesterday");
  else if (difference < 7 * DAY)
    return Gettext.ngettext("%d day ago", "%d days ago", days);
  else if (difference < 14 * DAY) return _("Last week");
  else if (difference < 28 * DAY)
    return Gettext.ngettext("%d week ago", "%d weeks ago", weeks);
  else if (difference < 60 * DAY) return _("Last month");
  else if (difference < 360 * DAY)
    return Gettext.ngettext("%d month ago", "%d months ago", months);
  else if (difference < 730 * DAY) return _("Last year");
  return Gettext.ngettext("%d year ago", "%d years ago", years);
};
