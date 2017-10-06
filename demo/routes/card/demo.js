'use strict';

import React from 'react';
import {
  Button,
  Card,
  CardHeaderSecondary,
  CardHeaderPrimary,
  CardMedia,
  CardContent,
  CardContentText,
  CardAreaSide,
  CardAreaMain,
  CardActions,
  CardActionsMain,
  CardActionsSupplemental,
  IconSvg,
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
import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';
import SnippetDemo1 from './snippets/3.snippet';
import SnippetDemo2 from './snippets/4.snippet';
import SnippetDemo3 from './snippets/5.snippet';
import Snippet6 from './snippets/6.snippet';

const IMAGE_STYLE = {
  maxWidth: '100%',
  width: '100%',
};

const DemoIcon = props => (
  <IconSvg {...props}>
    <svg viewBox="0 0 24 24">
      <path d="M20,5.6C20,4.7,19.3,4,18.4,4H5.6C4.7,4,4,4.7,4,5.6v9.6c0,0.9,0.7,1.6,1.6,1.6h11.2L20,20L20,5.6z" />
    </svg>
  </IconSvg>
);

export const CardDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Card Example">
      <DemoPreview>
        <TestBox maxWidth="360px">
          <Card>
            <CardAreaMain>
              <CardMedia
                mediaElement={
                  <img
                    src={'https://drscdn.500px.org/photo/114328229/m' +
                    '%3D2048/5011627dc09fda3bc69f09a5ad6562da'}
                    style={IMAGE_STYLE}
                  />}
              />
              <CardHeaderPrimary first title="Naive Deco Sans Font Pack" />
              <CardContent>
                <CardContentText>
                  Naïve Deco Sans is a sans serif handwritten font designed by
                  Fanny Coulez and Julien Saurin. It is available in two
                  versions: double or triple lines.…
                </CardContentText>
              </CardContent>
              <CardActions>
                <CardActionsMain>
                  <Button text="Read more" />
                </CardActionsMain>
              </CardActions>
            </CardAreaMain>
          </Card>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Card with horizontal layout">
      <DemoPreview>
        <TestBox maxWidth="480px">
          <Card>
            <CardAreaMain>
              <CardHeaderPrimary
                first
                title="Happy Daze"
                subtitle="Swirling psychedelia"
              />
              <CardContent>
                <CardContentText>
                  Take a step back in time with this vibrant and fun gift that
                  draws inspiration from 1960 pop and psychedelia.
                </CardContentText>
              </CardContent>
            </CardAreaMain>
            <CardAreaSide>
              <CardContent>
                <img
                  src={'http://www.lush.ca/dw/image/v2/AAHL_PRD/on/' +
                  'demandware.static/-/Sites-lushcosmetics-export/default/' +
                  'dw6565afe5/images/product/06638.jpg?sw=600'}
                  style={IMAGE_STYLE}
                />
              </CardContent>
            </CardAreaSide>
          </Card>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Card with horizontal layout">
      <DemoPreview>
        <TestBox maxWidth="480px">
          <Card>
            <CardAreaMain>
              <CardMedia
                mediaElement={
                  <img
                    src={'https://3.bp.blogspot.com/-Ec6c3NmpNPA/VshjO2OCsVI/' +
                    'AAAAAAAAD84/3XyeF9wF_bw/s1600/' +
                    'LUSH%2BHappy%2BDaze%2BGift%2BSet%2BClose%2BUp.JPG'}
                    style={IMAGE_STYLE}
                  />
                }
              >
                <CardHeaderPrimary
                  title="Happy Daze"
                  subtitle="Swirling psychedelia"
                />
              </CardMedia>
              <CardActions>
                <CardActionsMain>
                  <Button text="Bookmark" />
                  <Button text="Share" />
                </CardActionsMain>
              </CardActions>
            </CardAreaMain>
          </Card>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDemo1}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Card with horizontal layout">
      <DemoPreview>
        <TestBox maxWidth="480px">
          <Card>
            <CardAreaMain>
              <CardHeaderSecondary
                subtitle="Gift"
                title="Butterbear"
                image={'http://res.cloudinary.com/lush/image/upload/' +
                'v1474540908/lush_content/products/main/2016/09/' +
                'w_butterbear_gift.jpg'}
              />
              <CardContent>
                <CardContentText>
                  Bei uns steppt der Butterbear! Lust auf ein Tänzchen
                  mit unserem zuckersüßen Geschenk?
                </CardContentText>
              </CardContent>
              <CardActions>
                <CardActionsMain>
                  <Button text="Order" />
                  <Button text="Share" />
                </CardActionsMain>
              </CardActions>
            </CardAreaMain>
          </Card>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDemo2}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Card with horizontal layout">
      <DemoPreview>
        <TestBox maxWidth="480px">
          <Card>
            <CardAreaMain>
              <CardHeaderSecondary
                subtitle="Handmade Cosmetics"
                title="Lush"
                image={'http://res.cloudinary.com/lush/image/upload/' +
                'v1474540908/lush_content/products/main/2016/09/' +
                'w_butterbear_gift.jpg'}
              />
              
              <CardContent>
                <CardContentText>
                  Bei uns steppt der Butterbear! Lust auf ein Tänzchen
                  mit unserem zuckersüßen Geschenk?
                </CardContentText>
              </CardContent>
              
              <CardMedia
                mediaElement={
                  <img
                    src={'http://res.cloudinary.com/lush/image/upload/' +
                    'v1474540908/lush_content/products/main/2016/09/' +
                    'w_butterbear_gift.jpg'}
                    style={IMAGE_STYLE}
                  />
                }
              />
              
              <CardActions>
                <CardActionsSupplemental>
                  <Button text="Like" />
                </CardActionsSupplemental>
                <CardActionsMain>
                  <Button
                    icon={<DemoIcon />}
                    text="12"
                  />
                </CardActionsMain>
              </CardActions>
            </CardAreaMain>
          </Card>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDemo3}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Card with horizontal layout">
      <DemoPreview>
        <TestBox maxWidth="480px">
          <Card>
            <CardAreaMain>
              <CardHeaderSecondary
                subtitle="Handmade Cosmetics"
                title="Lush"
                image={'http://res.cloudinary.com/lush/image/upload/' +
                'v1474540908/lush_content/products/main/2016/09/' +
                'w_butterbear_gift.jpg'}
              />
              
              <CardContent>
                <CardContentText>
                  Bei uns steppt der Butterbear! Lust auf ein Tänzchen
                  mit unserem zuckersüßen Geschenk?
                </CardContentText>
              </CardContent>
              
              <CardMedia
                mediaElement={
                  <img
                    src={'http://res.cloudinary.com/lush/image/upload/' +
                    'v1474540908/lush_content/products/main/2016/09/' +
                    'w_butterbear_gift.jpg'}
                    style={IMAGE_STYLE}
                  />
                }
              />
            </CardAreaMain>
            <CardAreaSide>
              <CardActions>
                <CardActionsMain>
                  <Button icon={<DemoIcon />} />
                </CardActionsMain>
              </CardActions>
            </CardAreaSide>
          </Card>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet6}
      />
    </DemoSnippet>
  
  </RouteDemo>
);

CardDemoRoute.displayName = 'CardDemoRoute';
