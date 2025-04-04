/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
If you want to view the source, visit the plugin's github repository
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ColorFolderPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/constants.ts
var DEFAULT_STYLE = {
  backgroundColor: "#ffffff",
  textColor: "#000000",
  isBold: false,
  isItalic: false,
  opacity: 1,
  applyToSubfolders: false,
  applyToFiles: false
};
var DEFAULT_SETTINGS = {
  styles: {},
  presets: {},
  presetOrder: []
};

// src/settings/ColorSettingsTab.ts
var import_obsidian = require("obsidian");
var ColorSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.resetPresetStyle();
    this.syncPresetOrder();
  }
  syncPresetOrder() {
    const allPresets = Object.keys(this.plugin.settings.presets);
    if (!this.plugin.settings.presetOrder) {
      this.plugin.settings.presetOrder = [];
    }
    allPresets.forEach((presetName) => {
      if (!this.plugin.settings.presetOrder.includes(presetName)) {
        this.plugin.settings.presetOrder.push(presetName);
      }
    });
    this.plugin.settings.presetOrder = this.plugin.settings.presetOrder.filter(
      (name) => allPresets.includes(name)
    );
    this.plugin.saveSettings();
  }
  resetPresetStyle() {
    this.presetStyle = { ...DEFAULT_STYLE };
  }
  hide() {
    if (this.styleEl) {
      this.styleEl.remove();
    }
    super.hide();
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    if (this.styleEl) {
      this.styleEl.remove();
    }
    this.styleEl = document.createElement("style");
    document.head.appendChild(this.styleEl);
    this.syncPresetOrder();
    new import_obsidian.Setting(containerEl).setHeading().setName("Create new preset");
    const previewEl = containerEl.createDiv("preview-item");
    previewEl.setAttribute("data-path", "new-preset-preview");
    previewEl.createSpan().setText("Preview");
    this.updatePreview(previewEl);
    if (Object.keys(this.plugin.settings.presets).length > 0) {
      new import_obsidian.Setting(containerEl).setName("Start from preset").setDesc("Select an existing preset as a starting point").addDropdown((dropdown) => {
        dropdown.addOption("", "Select a preset...");
        Object.keys(this.plugin.settings.presets).forEach((preset) => {
          dropdown.addOption(preset, preset);
        });
        return dropdown.onChange((value) => {
          if (value) {
            this.presetStyle = { ...this.plugin.settings.presets[value] };
            this.updatePreview(previewEl);
            if (this.bgColorPicker)
              this.bgColorPicker.setValue(this.presetStyle.backgroundColor || "#ffffff");
            if (this.textColorPicker)
              this.textColorPicker.setValue(this.presetStyle.textColor || "#000000");
            if (this.boldToggle)
              this.boldToggle.setValue(this.presetStyle.isBold || false);
            if (this.italicToggle)
              this.italicToggle.setValue(this.presetStyle.isItalic || false);
            if (this.opacitySlider)
              this.opacitySlider.setValue(this.presetStyle.opacity || 1);
            dropdown.setValue("");
          }
        });
      });
    }
    const bgColorSetting = new import_obsidian.Setting(containerEl).setName("Background color");
    const bgColorContainer = bgColorSetting.controlEl.createDiv("color-container");
    let bgHexInput;
    let bgColorPicker;
    bgColorSetting.addColorPicker((color) => {
      bgColorPicker = color;
      this.bgColorPicker = color;
      color.setValue(this.presetStyle.backgroundColor || "#ffffff").onChange((value) => {
        this.presetStyle.backgroundColor = value;
        bgHexInput.value = value;
        this.updatePreview(previewEl);
      });
    });
    bgHexInput = bgColorContainer.createEl("input", {
      type: "text",
      cls: "color-hex-input",
      value: this.presetStyle.backgroundColor || "#ffffff"
    });
    bgHexInput.addEventListener("change", () => {
      const value = bgHexInput.value;
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        this.presetStyle.backgroundColor = value;
        bgColorPicker.setValue(value);
        this.updatePreview(previewEl);
      }
    });
    const textColorSetting = new import_obsidian.Setting(containerEl).setName("Text color");
    const textColorContainer = textColorSetting.controlEl.createDiv("color-container");
    let textHexInput;
    let textColorPicker;
    textColorSetting.addColorPicker((color) => {
      textColorPicker = color;
      this.textColorPicker = color;
      color.setValue(this.presetStyle.textColor || "#000000").onChange((value) => {
        this.presetStyle.textColor = value;
        textHexInput.value = value;
        this.updatePreview(previewEl);
      });
    });
    textHexInput = textColorContainer.createEl("input", {
      type: "text",
      cls: "color-hex-input",
      value: this.presetStyle.textColor || "#000000"
    });
    textHexInput.addEventListener("change", () => {
      const value = textHexInput.value;
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        this.presetStyle.textColor = value;
        textColorPicker.setValue(value);
        this.updatePreview(previewEl);
      }
    });
    let boldToggle;
    new import_obsidian.Setting(containerEl).setName("Bold").addToggle((toggle) => {
      boldToggle = toggle;
      this.boldToggle = toggle;
      toggle.setValue(this.presetStyle.isBold || false).onChange((value) => {
        this.presetStyle.isBold = value;
        this.updatePreview(previewEl);
      });
    });
    let italicToggle;
    new import_obsidian.Setting(containerEl).setName("Italic").addToggle((toggle) => {
      italicToggle = toggle;
      this.italicToggle = toggle;
      toggle.setValue(this.presetStyle.isItalic || false).onChange((value) => {
        this.presetStyle.isItalic = value;
        this.updatePreview(previewEl);
      });
    });
    let opacitySlider;
    new import_obsidian.Setting(containerEl).setName("Opacity").addSlider((slider) => {
      opacitySlider = slider;
      this.opacitySlider = slider;
      slider.setLimits(0, 1, 0.1).setValue(this.presetStyle.opacity || 1).onChange((value) => {
        this.presetStyle.opacity = value;
        this.updatePreview(previewEl);
      });
    });
    let textComponent;
    const savePresetSetting = new import_obsidian.Setting(containerEl).setName("Save preset").addText((text) => {
      textComponent = text;
      text.setPlaceholder("Preset name").setValue("");
    }).addButton((button) => button.setButtonText("Reset").onClick(() => {
      this.resetPresetStyle();
      this.updatePreview(previewEl);
      bgColorPicker.setValue(this.presetStyle.backgroundColor || "#ffffff");
      textColorPicker.setValue(this.presetStyle.textColor || "#000000");
      boldToggle.setValue(this.presetStyle.isBold || false);
      italicToggle.setValue(this.presetStyle.isItalic || false);
      opacitySlider.setValue(this.presetStyle.opacity || 1);
    })).addButton((button) => button.setButtonText("Save").setCta().onClick(async () => {
      const presetName = textComponent.getValue();
      if (presetName) {
        if (this.plugin.settings.presets[presetName]) {
          const shouldOverwrite = await this.plugin.confirmOverwritePreset(presetName);
          if (!shouldOverwrite)
            return;
        }
        this.plugin.settings.presets[presetName] = { ...this.presetStyle };
        if (!this.plugin.settings.presetOrder.includes(presetName)) {
          this.plugin.settings.presetOrder.push(presetName);
        }
        await this.plugin.saveSettings();
        textComponent.setValue("");
        this.display();
        new import_obsidian.Notice(`Preset "${presetName}" saved`);
      }
    }));
    new import_obsidian.Setting(containerEl).setHeading().setName("Existing presets");
    const presetsContainer = containerEl.createDiv("presets-container");
    this.plugin.settings.presetOrder.forEach((name) => {
      const preset = this.plugin.settings.presets[name];
      if (!preset)
        return;
      const presetContainer = presetsContainer.createDiv("preset-container");
      presetContainer.setAttribute("draggable", "true");
      presetContainer.dataset.presetName = name;
      presetContainer.addEventListener("dragstart", (e) => {
        if (e.dataTransfer) {
          e.dataTransfer.setData("text/plain", name);
          presetContainer.addClass("dragging");
        }
      });
      presetContainer.addEventListener("dragend", () => {
        presetContainer.removeClass("dragging");
      });
      presetContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = presetsContainer.querySelector(".dragging");
        if (!dragging)
          return;
        const siblings = Array.from(presetsContainer.querySelectorAll(".preset-container:not(.dragging)"));
        const nextSibling = siblings.find((sibling) => {
          const rect = sibling.getBoundingClientRect();
          const offset = e.clientY - rect.top - rect.height / 2;
          return offset < 0;
        });
        if (nextSibling) {
          presetsContainer.insertBefore(dragging, nextSibling);
        } else {
          presetsContainer.appendChild(dragging);
        }
      });
      presetContainer.addEventListener("drop", async (e) => {
        e.preventDefault();
        if (e.dataTransfer) {
          const containers = Array.from(presetsContainer.querySelectorAll(".preset-container"));
          const newOrder = containers.map((container) => container.dataset.presetName).filter((name2) => name2 !== void 0);
          this.plugin.settings.presetOrder = newOrder;
          await this.plugin.saveSettings();
        }
      });
      const previewEl2 = presetContainer.createDiv("preview-item");
      previewEl2.setAttribute("data-path", `preset-${name}`);
      previewEl2.createSpan().setText(name);
      this.updatePreview(previewEl2, preset);
      const dragHandle = presetContainer.createDiv("drag-handle");
      const handleIcon = dragHandle.createSpan();
      handleIcon.setText("\u22EE\u22EE");
      new import_obsidian.Setting(presetContainer).addButton((btn) => btn.setIcon("trash").setTooltip("Delete preset").onClick(async () => {
        delete this.plugin.settings.presets[name];
        this.plugin.settings.presetOrder = this.plugin.settings.presetOrder.filter((n) => n !== name);
        await this.plugin.saveSettings();
        this.display();
        new import_obsidian.Notice(`Preset "${name}" deleted`);
      }));
    });
    new import_obsidian.Setting(containerEl).setHeading().setName("Import/export");
    const importExportContainer = containerEl.createDiv("settings-import-export");
    const importButton = importExportContainer.createEl("button", {
      text: "Import"
    });
    importButton.addEventListener("click", async () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.onchange = async () => {
        var _a;
        const file = (_a = input.files) == null ? void 0 : _a[0];
        if (file) {
          try {
            const text = await file.text();
            const settings = JSON.parse(text);
            if (settings && typeof settings === "object" && "styles" in settings && "presets" in settings) {
              this.plugin.settings = settings;
              this.syncPresetOrder();
              await this.plugin.saveSettings();
              this.display();
              new import_obsidian.Notice("Settings imported successfully");
            } else {
              new import_obsidian.Notice("Invalid settings file format");
            }
          } catch (e) {
            console.error("Error importing settings:", e);
            new import_obsidian.Notice("Error importing settings");
          }
        }
      };
      input.click();
    });
    const exportButton = importExportContainer.createEl("button", {
      text: "Export"
    });
    exportButton.addEventListener("click", () => {
      const settingsJson = JSON.stringify(this.plugin.settings, null, 2);
      const blob = new Blob([settingsJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `color-folders-files-settings-v${this.plugin.manifest.version}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 0);
    });
  }
  updatePreview(previewEl, style = this.presetStyle) {
    const path = previewEl.getAttribute("data-path");
    if (!path || !style)
      return;
    if (style.backgroundColor) {
      previewEl.style.backgroundColor = style.backgroundColor;
      previewEl.style.transition = "background-color 0.1s ease";
    }
    if (style.textColor) {
      previewEl.style.color = style.textColor;
    }
    if (style.isBold) {
      previewEl.style.fontWeight = "bold";
    }
    if (style.isItalic) {
      previewEl.style.fontStyle = "italic";
    }
    if (typeof style.opacity === "number") {
      previewEl.style.opacity = String(style.opacity);
    }
    if (style.backgroundColor) {
      const rules = `
                /* Light mode: lighten on hover */
                body.theme-light .preview-item[data-path="${path}"]:hover {
                    background-color: color-mix(in srgb, white 20%, ${style.backgroundColor}) !important;
                    ${typeof style.opacity === "number" ? `opacity: ${Math.min(1, style.opacity + 0.15)} !important;` : ""}
                }

                /* Dark mode: darken on hover */
                body.theme-dark .preview-item[data-path="${path}"]:hover {
                    background-color: color-mix(in srgb, black 20%, ${style.backgroundColor}) !important;
                    ${typeof style.opacity === "number" ? `opacity: ${Math.min(1, style.opacity + 0.15)} !important;` : ""}
                }
            `;
      this.styleEl.textContent += rules;
    }
  }
};

// src/core/StyleManager.ts
var StyleManager = class {
  constructor() {
    this.styleEl = document.createElement("style");
    document.head.appendChild(this.styleEl);
  }
  updateStyles(styles) {
    const cssRules = [];
    cssRules.push(`
            .nav-folder-title,
            .nav-file-title,
            .preview-item {
                transition: background-color 0.1s ease, opacity 0.1s ease !important;
            }
        `);
    for (const [path, style] of Object.entries(styles)) {
      const escapedPath = CSS.escape(path);
      if (style.backgroundColor) {
        cssRules.push(`
                    .nav-folder-title[data-path="${escapedPath}"] {
                        background-color: ${style.backgroundColor} !important;
                    }

                    /* Light mode: lighten on hover */
                    body.theme-light .nav-folder-title[data-path="${escapedPath}"]:hover {
                        background-color: color-mix(in srgb, white 20%, ${style.backgroundColor}) !important;
                    }

                    /* Dark mode: darken on hover */
                    body.theme-dark .nav-folder-title[data-path="${escapedPath}"]:hover {
                        background-color: color-mix(in srgb, black 20%, ${style.backgroundColor}) !important;
                    }
                `);
      }
      if (style.textColor) {
        cssRules.push(`
                    .nav-folder-title[data-path="${escapedPath}"],
                    .nav-folder-title[data-path="${escapedPath}"]:hover {
                        color: ${style.textColor} !important;
                    }
                `);
      }
      if (style.backgroundColor) {
        cssRules.push(`
                    .nav-file-title[data-path="${escapedPath}"] {
                        background-color: ${style.backgroundColor} !important;
                    }

                    /* Light mode: lighten on hover */
                    body.theme-light .nav-file-title[data-path="${escapedPath}"]:hover {
                        background-color: color-mix(in srgb, white 20%, ${style.backgroundColor}) !important;
                    }

                    /* Dark mode: darken on hover */
                    body.theme-dark .nav-file-title[data-path="${escapedPath}"]:hover {
                        background-color: color-mix(in srgb, black 20%, ${style.backgroundColor}) !important;
                    }
                `);
      }
      if (style.textColor) {
        cssRules.push(`
                    .nav-file-title[data-path="${escapedPath}"],
                    .nav-file-title[data-path="${escapedPath}"]:hover {
                        color: ${style.textColor} !important;
                    }
                `);
      }
      if (style.isBold) {
        cssRules.push(`
                    .nav-folder-title[data-path="${escapedPath}"],
                    .nav-file-title[data-path="${escapedPath}"] {
                        font-weight: bold !important;
                    }
                `);
      }
      if (style.isItalic) {
        cssRules.push(`
                    .nav-folder-title[data-path="${escapedPath}"],
                    .nav-file-title[data-path="${escapedPath}"] {
                        font-style: italic !important;
                    }
                `);
      }
      if (typeof style.opacity === "number") {
        cssRules.push(`
                    .nav-folder-title[data-path="${escapedPath}"],
                    .nav-file-title[data-path="${escapedPath}"] {
                        opacity: ${style.opacity} !important;
                    }
                    .nav-folder-title[data-path="${escapedPath}"]:hover,
                    .nav-file-title[data-path="${escapedPath}"]:hover {
                        opacity: ${Math.min(1, style.opacity + 0.15)} !important;
                    }
                `);
      }
      if (style.applyToSubfolders) {
        if (style.backgroundColor) {
          cssRules.push(`
                        .nav-folder-title[data-path^="${escapedPath}/"] {
                            background-color: ${style.backgroundColor} !important;
                        }

                        /* Light mode: lighten on hover */
                        body.theme-light .nav-folder-title[data-path^="${escapedPath}/"]:hover {
                            background-color: color-mix(in srgb, white 20%, ${style.backgroundColor}) !important;
                        }

                        /* Dark mode: darken on hover */
                        body.theme-dark .nav-folder-title[data-path^="${escapedPath}/"]:hover {
                            background-color: color-mix(in srgb, black 20%, ${style.backgroundColor}) !important;
                        }
                    `);
        }
        if (style.textColor) {
          cssRules.push(`
                        .nav-folder-title[data-path^="${escapedPath}/"],
                        .nav-folder-title[data-path^="${escapedPath}/"]:hover {
                            color: ${style.textColor} !important;
                        }
                    `);
        }
        if (style.isBold) {
          cssRules.push(`
                        .nav-folder-title[data-path^="${escapedPath}/"] {
                            font-weight: bold !important;
                        }
                    `);
        }
        if (style.isItalic) {
          cssRules.push(`
                        .nav-folder-title[data-path^="${escapedPath}/"] {
                            font-style: italic !important;
                        }
                    `);
        }
        if (typeof style.opacity === "number") {
          cssRules.push(`
                        .nav-folder-title[data-path^="${escapedPath}/"] {
                            opacity: ${style.opacity} !important;
                        }
                        .nav-folder-title[data-path^="${escapedPath}/"]:hover {
                            opacity: ${Math.min(1, style.opacity + 0.15)} !important;
                        }
                    `);
        }
      }
      if (style.applyToFiles) {
        if (style.backgroundColor) {
          cssRules.push(`
                        .nav-file-title[data-path^="${escapedPath}/"] {
                            background-color: ${style.backgroundColor} !important;
                        }

                        /* Light mode: lighten on hover */
                        body.theme-light .nav-file-title[data-path^="${escapedPath}/"]:hover {
                            background-color: color-mix(in srgb, white 20%, ${style.backgroundColor}) !important;
                        }

                        /* Dark mode: darken on hover */
                        body.theme-dark .nav-file-title[data-path^="${escapedPath}/"]:hover {
                            background-color: color-mix(in srgb, black 20%, ${style.backgroundColor}) !important;
                        }
                    `);
        }
        if (style.textColor) {
          cssRules.push(`
                        .nav-file-title[data-path^="${escapedPath}/"],
                        .nav-file-title[data-path^="${escapedPath}/"]:hover {
                            color: ${style.textColor} !important;
                        }
                    `);
        }
        if (style.isBold) {
          cssRules.push(`
                        .nav-file-title[data-path^="${escapedPath}/"] {
                            font-weight: bold !important;
                        }
                    `);
        }
        if (style.isItalic) {
          cssRules.push(`
                        .nav-file-title[data-path^="${escapedPath}/"] {
                            font-style: italic !important;
                        }
                    `);
        }
        if (typeof style.opacity === "number") {
          cssRules.push(`
                        .nav-file-title[data-path^="${escapedPath}/"] {
                            opacity: ${style.opacity} !important;
                        }
                        .nav-file-title[data-path^="${escapedPath}/"]:hover {
                            opacity: ${Math.min(1, style.opacity + 0.15)} !important;
                        }
                    `);
        }
      }
      if (style.backgroundColor) {
        cssRules.push(`
                    .preview-item[data-path="${escapedPath}"] {
                        background-color: ${style.backgroundColor} !important;
                        ${style.textColor ? `color: ${style.textColor} !important;` : ""}
                        ${style.isBold ? "font-weight: bold !important;" : ""}
                        ${style.isItalic ? "font-style: italic !important;" : ""}
                        ${typeof style.opacity === "number" ? `opacity: ${style.opacity} !important;` : ""}
                    }

                    /* Light mode: lighten on hover */
                    body.theme-light .preview-item[data-path="${escapedPath}"]:hover {
                        background-color: color-mix(in srgb, white 20%, ${style.backgroundColor}) !important;
                        ${typeof style.opacity === "number" ? `opacity: ${Math.min(1, style.opacity + 0.15)} !important;` : ""}
                    }

                    /* Dark mode: darken on hover */
                    body.theme-dark .preview-item[data-path="${escapedPath}"]:hover {
                        background-color: color-mix(in srgb, black 20%, ${style.backgroundColor}) !important;
                        ${typeof style.opacity === "number" ? `opacity: ${Math.min(1, style.opacity + 0.15)} !important;` : ""}
                    }
                `);
      }
    }
    this.styleEl.textContent = cssRules.join("\n");
  }
  cleanup() {
    if (this.styleEl && this.styleEl.parentNode) {
      this.styleEl.parentNode.removeChild(this.styleEl);
    }
  }
};

// src/modals/ColorSettingsModal.ts
var import_obsidian2 = require("obsidian");
var ColorSettingsModal = class extends import_obsidian2.Modal {
  constructor(app, plugin, filePath) {
    super(app);
    this.plugin = plugin;
    this.filePath = filePath;
    this.style = { ...plugin.settings.styles[filePath] || {} };
  }
  onOpen() {
    this.modalEl.addClass("color-folders-files-modal");
    const { contentEl } = this;
    contentEl.empty();
    const previewSection = contentEl.createDiv("preview-section");
    this.previewEl = previewSection.createDiv("preview-item");
    this.previewEl.setAttribute("data-path", this.filePath);
    const fileName = this.filePath.split("/").pop() || this.filePath;
    this.previewEl.createSpan().setText(fileName);
    this.updatePreview();
    const bgColorSetting = new import_obsidian2.Setting(contentEl).setName("Background color");
    const bgColorContainer = bgColorSetting.controlEl.createDiv("color-container");
    bgColorSetting.addColorPicker((color) => {
      this.bgColorPicker = color;
      color.setValue(this.style.backgroundColor || "#ffffff").onChange((value) => {
        this.style.backgroundColor = value;
        bgHexInput.value = value;
        this.updatePreview();
      });
    });
    const bgHexInput = bgColorContainer.createEl("input", {
      type: "text",
      cls: "color-hex-input",
      value: this.style.backgroundColor || "#ffffff"
    });
    bgHexInput.addEventListener("change", () => {
      const value = bgHexInput.value;
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        this.style.backgroundColor = value;
        this.bgColorPicker.setValue(value);
        this.updatePreview();
      }
    });
    const textColorSetting = new import_obsidian2.Setting(contentEl).setName("Text color");
    const textColorContainer = textColorSetting.controlEl.createDiv("color-container");
    textColorSetting.addColorPicker((color) => {
      this.textColorPicker = color;
      color.setValue(this.style.textColor || "#000000").onChange((value) => {
        this.style.textColor = value;
        textHexInput.value = value;
        this.updatePreview();
      });
    });
    const textHexInput = textColorContainer.createEl("input", {
      type: "text",
      cls: "color-hex-input",
      value: this.style.textColor || "#000000"
    });
    textHexInput.addEventListener("change", () => {
      const value = textHexInput.value;
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        this.style.textColor = value;
        this.textColorPicker.setValue(value);
        this.updatePreview();
      }
    });
    new import_obsidian2.Setting(contentEl).setName("Bold").addToggle((toggle) => {
      this.boldToggle = toggle;
      toggle.setValue(this.style.isBold || false).onChange((value) => {
        this.style.isBold = value;
        this.updatePreview();
      });
    });
    new import_obsidian2.Setting(contentEl).setName("Italic").addToggle((toggle) => {
      this.italicToggle = toggle;
      toggle.setValue(this.style.isItalic || false).onChange((value) => {
        this.style.isItalic = value;
        this.updatePreview();
      });
    });
    new import_obsidian2.Setting(contentEl).setName("Opacity").addSlider((slider) => {
      this.opacitySlider = slider;
      slider.setLimits(0, 1, 0.1).setValue(this.style.opacity || 1).onChange((value) => {
        this.style.opacity = value;
        this.updatePreview();
      });
    });
    new import_obsidian2.Setting(contentEl).setName("Apply to subfolders").addToggle((toggle) => {
      this.subfolderToggle = toggle;
      toggle.setValue(this.style.applyToSubfolders || false).onChange((value) => {
        this.style.applyToSubfolders = value;
      });
    });
    new import_obsidian2.Setting(contentEl).setName("Apply to files").addToggle((toggle) => {
      this.filesToggle = toggle;
      toggle.setValue(this.style.applyToFiles || false).onChange((value) => {
        this.style.applyToFiles = value;
      });
    });
    if (Object.keys(this.plugin.settings.presets).length > 0) {
      new import_obsidian2.Setting(contentEl).setName("Apply preset").addDropdown((dropdown) => {
        Object.keys(this.plugin.settings.presets).forEach((preset) => {
          dropdown.addOption(preset, preset);
        });
        return dropdown.onChange((value) => {
          this.style = { ...this.plugin.settings.presets[value] };
          this.updateControls();
          this.updatePreview();
        });
      });
    }
    let presetNameInput;
    const presetSetting = new import_obsidian2.Setting(contentEl).setClass("preset-save").setName("Save as preset").addText((text) => {
      presetNameInput = text;
      text.setPlaceholder("Preset name");
    }).addButton((button) => button.setButtonText("Save").setCta().onClick(async () => {
      const presetName = presetNameInput.getValue();
      if (presetName) {
        if (this.plugin.settings.presets[presetName]) {
          const shouldOverwrite = await this.plugin.confirmOverwritePreset(presetName);
          if (!shouldOverwrite)
            return;
        }
        this.plugin.settings.presets[presetName] = { ...this.style };
        await this.plugin.saveSettings();
        presetNameInput.setValue("");
        new import_obsidian2.Notice(`Preset "${presetName}" saved`);
        this.onOpen();
      }
    }));
    const buttonSection = contentEl.createDiv("button-section");
    const removeButton = buttonSection.createEl("button", {
      text: "Remove styling"
    });
    removeButton.addEventListener("click", async () => {
      delete this.plugin.settings.styles[this.filePath];
      await this.plugin.saveSettings();
      new import_obsidian2.Notice("Styling removed");
      this.close();
    });
    const resetButton = buttonSection.createEl("button", {
      text: "Reset"
    });
    resetButton.addEventListener("click", () => {
      this.style = { ...DEFAULT_STYLE };
      this.updateControls();
      this.updatePreview();
    });
    const applyButton = buttonSection.createEl("button", {
      text: "Apply",
      cls: "mod-cta"
    });
    applyButton.addEventListener("click", async () => {
      await this.saveChanges();
      new import_obsidian2.Notice("Changes applied");
      this.close();
    });
    const closeButton = buttonSection.createEl("button", {
      text: "Close"
    });
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
  updateControls() {
    if (this.bgColorPicker)
      this.bgColorPicker.setValue(this.style.backgroundColor || "#ffffff");
    if (this.textColorPicker)
      this.textColorPicker.setValue(this.style.textColor || "#000000");
    if (this.boldToggle)
      this.boldToggle.setValue(this.style.isBold || false);
    if (this.italicToggle)
      this.italicToggle.setValue(this.style.isItalic || false);
    if (this.opacitySlider)
      this.opacitySlider.setValue(this.style.opacity || 1);
    if (this.subfolderToggle)
      this.subfolderToggle.setValue(this.style.applyToSubfolders || false);
    if (this.filesToggle)
      this.filesToggle.setValue(this.style.applyToFiles || false);
  }
  updatePreview() {
    if (this.styleEl) {
      this.styleEl.remove();
    }
    this.styleEl = document.createElement("style");
    const rules = [];
    if (this.style.backgroundColor) {
      rules.push(`
                .preview-item[data-path="${this.filePath}"] {
                    background-color: ${this.style.backgroundColor} !important;
                    transition: background-color 0.1s ease !important;
                    ${this.style.textColor ? `color: ${this.style.textColor} !important;` : ""}
                    ${this.style.isBold ? "font-weight: bold !important;" : ""}
                    ${this.style.isItalic ? "font-style: italic !important;" : ""}
                    ${typeof this.style.opacity === "number" ? `opacity: ${this.style.opacity} !important;` : ""}
                }

                /* Light mode: lighten on hover */
                body.theme-light .preview-item[data-path="${this.filePath}"]:hover {
                    background-color: color-mix(in srgb, white 20%, ${this.style.backgroundColor}) !important;
                    ${typeof this.style.opacity === "number" ? `opacity: ${Math.min(1, this.style.opacity + 0.15)} !important;` : ""}
                }

                /* Dark mode: darken on hover */
                body.theme-dark .preview-item[data-path="${this.filePath}"]:hover {
                    background-color: color-mix(in srgb, black 20%, ${this.style.backgroundColor}) !important;
                    ${typeof this.style.opacity === "number" ? `opacity: ${Math.min(1, this.style.opacity + 0.15)} !important;` : ""}
                }
            `);
    }
    this.styleEl.textContent = rules.join("\n");
    document.head.appendChild(this.styleEl);
  }
  async saveChanges() {
    this.plugin.settings.styles[this.filePath] = this.style;
    await this.plugin.saveSettings();
  }
  onClose() {
    if (this.styleEl) {
      this.styleEl.remove();
    }
    this.modalEl.removeClass("color-folders-files-modal");
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/core/EventManager.ts
var EventManager = class {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    this.activeModals = /* @__PURE__ */ new Set();
  }
  registerEvents() {
    this.plugin.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        this.handleFileMenu(menu, file);
      })
    );
  }
  handleFileMenu(menu, file) {
    menu.addItem((item) => {
      item.setTitle("Customize appearance").setIcon("palette").onClick(() => {
        this.activeModals.forEach((modal2) => modal2.close());
        this.activeModals.clear();
        const modal = new ColorSettingsModal(this.app, this.plugin, file.path);
        this.activeModals.add(modal);
        const originalClose = modal.close.bind(modal);
        modal.close = () => {
          this.activeModals.delete(modal);
          originalClose();
        };
        modal.open();
      });
    });
  }
  cleanup() {
    this.activeModals.forEach((modal) => {
      try {
        modal.close();
      } catch (e) {
        console.error("Error closing modal:", e);
      }
    });
    this.activeModals.clear();
    document.querySelectorAll(".color-folders-files-modal").forEach((el) => {
      try {
        el.remove();
      } catch (e) {
        console.error("Error removing modal element:", e);
      }
    });
  }
};

// src/main.ts
var ColorFolderPlugin = class extends import_obsidian3.Plugin {
  async onload() {
    await this.loadSettings();
    this.styleManager = new StyleManager();
    this.eventManager = new EventManager(this.app, this);
    this.eventManager.registerEvents();
    this.addSettingTab(new ColorSettingsTab(this.app, this));
    this.updateStyles();
  }
  onunload() {
    this.styleManager.cleanup();
    this.eventManager.cleanup();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.updateStyles();
  }
  updateStyles() {
    this.styleManager.updateStyles(this.settings.styles);
  }
  async confirmOverwritePreset(name) {
    return new Promise((resolve) => {
      const modal = new import_obsidian3.Modal(this.app);
      modal.titleEl.setText("Overwrite preset");
      modal.contentEl.createEl("p", {
        text: `A preset named "${name}" already exists. Do you want to overwrite it?`
      });
      modal.contentEl.createDiv("modal-button-container", (buttonContainer) => {
        buttonContainer.createEl("button", { text: "Cancel" }).addEventListener("click", () => {
          modal.close();
          resolve(false);
        });
        const confirmButton = buttonContainer.createEl("button", {
          cls: "mod-cta",
          text: "Overwrite"
        });
        confirmButton.addEventListener("click", () => {
          modal.close();
          resolve(true);
        });
      });
      modal.open();
    });
  }
};
