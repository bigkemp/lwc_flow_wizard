# LWC Wizard - A Screen Flow via Lightning Web Components

This repository contains two Lightning Web Components (LWC) that provide a generic screen flow-like behavior. The main component, `cb_lwc_wizard`, serves as the parent component responsible for navigation between pages and providing the user interface. The second component, `cb_lwc_wizard_page`, acts as containers for the content of each step inside the wizard.

## Purpose

The purpose of this repository is to share a reusable LWC component that simplifies the development of screen flows. By using these components, developers can focus more on implementing the desired functionality and spend less time on UI design and navigation logic.

## Usage

To use the LWC Wizard components, follow the steps below:

1. Import the necessary components into your LWC project.
2. Place the `cb_lwc_wizard` component in your markup as the main container for the wizard.
3. Add one or more instances of the `cb_lwc_wizard_page` component as children of the `cb_lwc_wizard` component.
4. Customize the content of each `cb_lwc_wizard_page` component to fit your specific needs.

Here's an example implementation using HTML:

```html
<template>
	<c-cb_lwc_wizard title="Such and Such Wizard" onclose={closeAction} loading={isloading} onnext={handleNext}
		onback={handleBack} finalbtnname="Complete" onfinish={handleFinish}>

		<c-cb_lwc_wizard_page data-page="pageOne">
			<div class="slds-box">
				<c-lwc_checkbox_group name="Checkbox Group" label="Checkbox Group" options={options1}
					onselected={choseOption}></c-lwc_checkbox_group>
			</div>
		</c-cb_lwc_wizard_page>

		<c-cb_lwc_wizard_page data-page="pageTwo">
			<lightning-combobox style="width: 20%;" label="Type" label-class="combobox-filter" name="Type" options={types}
				value={selectedType} onchange={handleChange}>
			</lightning-combobox>
		</c-cb_lwc_wizard_page>
	</c-cb_lwc_wizard>
</template>
```

Feel free to modify and customize the components according to your specific requirements.

## Contribution

If you would like to contribute to this repository, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear and descriptive messages.
4. Push your branch to your forked repository.
5. Submit a pull request to this repository's main branch, explaining the purpose and changes made.

Your contributions are highly appreciated!

## License

This repository is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
