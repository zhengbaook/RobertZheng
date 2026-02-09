/// <reference types="cypress" />

describe('Case 1 - Basic Navigation and Interaction', () => {
	it('visits Baidu, searches for cypress and asserts results', () => {
		// Visit Baidu
		cy.visit('https://qualityassurance-amh-gbb-sit12.p2g.netd2.hsbc.com.hk/portalserver/onboarding/account-opening')
        
		cy.get('#apply-button').click()
		cy.get('.cvyRXi > [data-testid="Button"]').click()
		// 点击下拉菜单，打开选项列表
        cy.get(':nth-child(3) > [data-testid="Dropdown"] > .widthChange > .css-1994fnm-control').click({ force: true });

        // 选择第一个选项
        cy.get('#react-select-2-option-0').click();
		cy.get(':nth-child(4) > .sc-jrsJWt > [data-testid="TextInput"]').type('John')
		cy.get(':nth-child(5) > .sc-jrsJWt > [data-testid="TextInput"]').type('Doe')
		cy.get(':nth-child(6) > .sc-jrsJWt > [data-testid="TextInput"]').type('test@test.com')
		// cy.get('[name="LL012"]').type('852')
		cy.get('[name="LL011"]').type(`8${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}8`);
		cy.get(':nth-child(9) > [data-testid="Dropdown"] > .widthChange > .css-1994fnm-control > .css-1o3m3d8').click({ force: true })
		cy.get('#react-select-3-option-2').click()
        cy.get(':nth-child(10) > [data-testid="Dropdown"] > .widthChange > .css-1994fnm-control').click({ force: true })
		cy.get('#react-select-4-option-0').click()
		cy.get('[data-testid="Nav-Bar-Right"] > [data-testid="Button"]').click()



	
	})
})



