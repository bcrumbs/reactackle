import React from 'react';
import {
  TextField,
  FormItem,
  IconDefault,
} from 'reactackle';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';
import SnippetStyles from './snippets/1.snippet';
import SnippetSizes from './snippets/2.snippet';
import SnippetContent from './snippets/3.snippet';
import SnippetIcons from './snippets/4.snippet';
import SnippetPrefix from './snippets/5.snippet';
import SnippetStates from './snippets/6.snippet';
import SnippetLabels from './snippets/7.snippet';
import SnippetMultiline from './snippets/8.snippet';

export const TextFieldDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="TextField styles">
      <DemoPreview>
        <FormItem>
          <TextField placeholder="Default TextField" />
        </FormItem>
        <FormItem>
          <TextField bordered placeholder="Bordered TextField" />
        </FormItem>
      </DemoPreview>
      <DemoCode
        code={SnippetStyles}
      />
    </DemoSnippet>

    <DemoSnippet title="TextField multiline">
      <DemoPreview>
        <FormItem>
          <TextField
            bordered
            placeholder="Default TextField"
            multiline
            multilineRows={{ min: 1 }}
          />
        </FormItem>
        <FormItem>
          <TextField
            bordered
            placeholder="Bordered TextField"
            multiline
            multilineRows={{ max: 3 }}
          />
        </FormItem>
      </DemoPreview>
      <DemoCode
        code={SnippetMultiline}
      />
    </DemoSnippet>
  
    <DemoSnippet title="TextField label">
      <DemoPreview>
        <FormItem>
          <TextField
            placeholder="Enter your value..."
            label="label position top"
            labelPosition="top"
          />
        </FormItem>
        <FormItem>
          <TextField
            placeholder="Enter your value..."
            label="Sliding label"
            labelPosition="top"
            slidingLabel
          />
        </FormItem>
        <FormItem>
          <TextField
            placeholder="Enter your value..."
            label="label position side"
            labelPosition="side"
          />
        </FormItem>
      </DemoPreview>
      <DemoCode
        code={SnippetLabels}
      />
    </DemoSnippet>

    <DemoSnippet title="TextField sizes">
      <DemoPreview>
        <TestBox title="Default TextField">
          <FormItem>
            <TextField
              placeholder="Enter you value..."
              label="Default TextField"
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              placeholder="Enter you value..."
              label="Default TextField"
            />
          </FormItem>
        </TestBox>
        <TestBox spaced title="Dense">
          <FormItem>
            <TextField
              dense
              placeholder="Enter you value..."
              label="Dense TextField"
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              dense
              placeholder="Enter you value..."
              label="Dense TextField"
            />
          </FormItem>
        </TestBox>

        <TestBox spaced title="Full-width">
          <FormItem>
            <TextField
              fullWidth
              placeholder="Enter you value..."
              label="Full-width TextField"
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              fullWidth
              placeholder="Enter you value..."
              label="Full-width TextField"
            />
          </FormItem>
        </TestBox>

        <TestBox spaced title="Full-width & Dense">
          <FormItem>
            <TextField
              dense
              fullWidth
              placeholder="Enter you value..."
              label="Full-width dense TextField"
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              dense
              fullWidth
              placeholder="Enter you value..."
              label="Full-width dense TextField"
            />
          </FormItem>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetSizes}
      />
    </DemoSnippet>

    <DemoSnippet title="Extended TextField">
      <DemoPreview>
        <TestBox title="Default TextField">
          <FormItem>
            <TextField
              defaultValue="bada boom!"
              password
              message="At least 5 symbols length"
              label="Password TextField"
            />
          </FormItem>
          <FormItem>
            <TextField
              defaultValue="clear me!"
              clearingIcon
              label="TextField with clearing button"
            />
          </FormItem>
          <FormItem>
            <TextField
              placeholder="Enter something..."
              symbolLimit={5}
              clearingIcon
              label="TextField with symbol limit"
            />
          </FormItem>
          <FormItem>
            <TextField
              placeholder="Enter your value..."
              label="TextField with tooltip"
              tooltip="Need help?"
            />
          </FormItem>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetContent}
      />
    </DemoSnippet>

    <DemoSnippet title="TextField Icons">
      <DemoPreview>
        <TestBox title="Outer Icon">
          <FormItem>
            <TextField
              placeholder="Enter you value..."
              label="TextField with iconOuter"
              iconOuter={IconDefault}
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              placeholder="Enter you value..."
              label="TextField with iconOuter"
              iconOuter={IconDefault}
            />
          </FormItem>
        </TestBox>
        <TestBox spaced title="Inner Icon">
          <FormItem>
            <TextField
              placeholder="Enter you value..."
              label="TextField with iconInner"
              iconInner={IconDefault}
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              placeholder="Enter you value..."
              label="TextField with iconInner"
              iconInner={IconDefault}
            />
          </FormItem>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetIcons}
      />
    </DemoSnippet>

    <DemoSnippet title="TextField Prefix & Postfix">
      <DemoPreview>
        <FormItem>
          <TextField
            defaultValue="7655555"
            clearingIcon
            prefix="+7"
            postfix="Ru"
          />
        </FormItem>
        <FormItem>
          <TextField
            bordered
            defaultValue="7655555"
            clearingIcon
            prefix="+7"
            postfix="Ru"
          />
        </FormItem>
      </DemoPreview>
      <DemoCode
        code={SnippetPrefix}
      />
    </DemoSnippet>

    <DemoSnippet title="TextField states">
      <DemoPreview>
        <TestBox title="Disabled">
          <FormItem>
            <TextField
              disabled
              placeholder="Enter you value..."
              label="Disabled TextField"
              clearingIcon
              iconOuter={IconDefault}
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              disabled
              placeholder="Enter you value..."
              label="Disabled TextField"
              clearingIcon
              iconOuter={IconDefault}
            />
          </FormItem>
        </TestBox>

        <TestBox spaced title="Error">
          <FormItem>
            <TextField
              colorScheme="error"
              placeholder="Enter you value..."
              label="TextField with error"
              clearingIcon
              message="Some error happened"
              iconOuter={IconDefault}
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              colorScheme="error"
              placeholder="Enter you value..."
              label="TextField with error"
              clearingIcon
              message="Some error happened"
              iconOuter={IconDefault}
            />
          </FormItem>
        </TestBox>

        <TestBox spaced title="Success">
          <FormItem>
            <TextField
              colorScheme="success"
              placeholder="Enter you value..."
              label="TextField with success"
              clearingIcon
              message="Successfully saved"
              iconOuter={IconDefault}
            />
          </FormItem>
          <FormItem>
            <TextField
              bordered
              colorScheme="success"
              placeholder="Enter you value..."
              label="TextField with success"
              clearingIcon
              message="Successfully saved"
              iconOuter={IconDefault}
            />
          </FormItem>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetStates}
      />
    </DemoSnippet>
  </RouteDemo>
);

TextFieldDemoRoute.displayName = 'TextFieldDemoRoute';
