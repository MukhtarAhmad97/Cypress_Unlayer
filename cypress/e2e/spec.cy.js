import MailosaurClient from "mailosaur";

const path = require('path');
const fs = require('fs');
import 'cypress-xpath';
import 'cypress-iframe';
import 'cypress-mailosaur';



describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://studio.unlayer.com/create/team-member-introduction-email')
    cy.wait(2000); 
    cy.get('.t-acceptAllButton', {timeout:5000}).should('be.visible').click()        
        cy.wait(2000); 

        cy.frameLoaded('iframe[src="https://editor.unlayer.com/1.188.0/editor.html"]')
        cy.iframe("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")
    .xpath('//*[@id="u_column_1"]/div/div/div[4]/div[1]')
    .click()

        cy.wait(3000)

        const name = 'Mukhtar Ahmed'
        cy.iframe("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")
            .find('#u_content_heading_2 > div > div > div > span')
            .type(name, { force: true })

        cy.iframe("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")
            .xpath("(//span[text()='Montserrat'])[1]")
            .click();

        cy.iframe("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")
            .xpath("//span[text()='Nunito']")
            .click();

        


        cy.iframe("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")
            .xpath("(//input[@name='counter-input'])[1]")
            .click();

        cy.iframe("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")
            .xpath("(//input[@name='counter-input'])[1]")
            .type('5');    



        cy.xpath("//button[normalize-space()='Export']").click();
        
        cy.xpath("//div[normalize-space()='Download']").click();
        
        cy.xpath("//input[@id='email']").type("anything@fg37jcgd.mailosaur.net");
        
        cy.xpath("//button[normalize-space()='Download']").click();
        
        cy.wait(5000);    

        
        const serverId = 'fg37jcgd';
        const testEmailAddress = `anything@${serverId}.mailosaur.net`;

        cy.mailosaurGetMessage(serverId, {
            sentTo: testEmailAddress,
            timeout: 20000,
          }).then((email) => {
            const emailHtml = email.html.body;
      
            const linkMatches = emailHtml.match(/href="(https?:\/\/[^\s"]+)"/g);
            if (linkMatches && linkMatches.length > 0) {
              const links = linkMatches.map((match) =>
                match.match(/href="(https?:\/\/[^\s"]+)"/)[1]
              );
      
              cy.log('Extracted links:', links);
      
              cy.visit(links[1]);
      
              const downloadPath = path.join('cypress', 'downloads');
              
              cy.task('createDir', downloadPath)
      
              cy.downloadFile(links[1], downloadPath, 'downloadedFile.zip').then(() => {
                const zipFilePath = path.join(downloadPath, 'downloadedFile.zip')
                const outputPath = path.join('cypress', 'extracted_files')
      
                cy.task('extractZip', {
                  zipFilePath,
                  outputPath,
                }).then((result) => {
                  cy.log(result)
      
                  cy.task('getFiles', outputPath).then((files) => {
                    const htmlFile = files.find((file) => file.endsWith('.html'))
      
                    if (!htmlFile) {
                      throw new Error('No HTML file found in the extracted folder.')
                    }
      
                    const htmlFilePath = path.join(outputPath, htmlFile)
                    const absoluteFilePath = path
                      .resolve(htmlFilePath)
                      .replace(/\\/g, '/')
                    cy.visit(`file://${absoluteFilePath}`)
                    cy.log('Navigated to the extracted HTML file.')
                    cy.xpath('//*[@id="u_content_heading_2"]/tbody/tr/td/h1/span').should('have.text', name)

                   cy.xpath('//*[@id="u_content_heading_2"]/tbody/tr/td/h1')
                   .should('have.attr', 'style')
                   .and('contain', 'font-size: 65px')

                  })
                })
              })
            }
          })
        })
      })


