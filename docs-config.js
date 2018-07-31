module.exports = {
    rootPath: '.tmp/docs',
    docs: {
        'argo': [{
            title: 'Overview', path: 'README.md',
            children: [{
                title: 'How to configure your artifact repository', path: 'ARTIFACT_REPO.md',
            }]
        }, {
            title: 'Getting started', path: 'demo.md',
        }, {
            title: 'Examples', path: 'examples/README.md',
        }],
        'argo-cd': [{
            title: 'Overview', path: 'README.md',
        }, {
            title: 'Features', path: 'docs/README.md',
            children: [{
                title: 'Architecture', path: 'docs/architecture.md',
            }, {
                title: 'Tracking Strategies', path: 'docs/tracking_strategies.md',
            }, {
                title: 'Application Sources', path: 'docs/application_sources.md',
            }, {
                title: 'Application Parameters', path: 'docs/parameters.md',
            }, {
                title: 'Resource Health', path: 'docs/health.md',
            }, {
                title: 'Resource Hooks', path: 'docs/resource_hooks.md',
            }, {
                title: 'Single Sign On', path: 'docs/sso.md',
            }, {
                title: 'Webhooks', path: 'docs/webhook.md',
            }, {
                title: 'RBAC', path: 'docs/rbac.md',
            }],
        }],
        'argo-events': [{
            title: 'Overview', path: 'README.md',
        }, {
            title: 'Documentation', path: 'docs/index.md',
            children: [{
                title: 'Quickstart', path: 'docs/quickstart.md'
            }, {
                title: 'Signal Guide', path: 'docs/signal-guide.md'
            }, {
                title: 'Trigger Guide', path: 'docs/trigger-guide.md'
            }]
        }, {
            title: 'Contributing', path: 'CONTRIBUTING.md'
        }, {
            title: 'Roadmap', path: 'ROADMAP.md'
        }],
        'argo-ci': [{
            title: 'Overview', path: 'README.md',
        }, {
            title: 'Roadmap', path: 'ROADMAP.md'
        }],
    },
    normalizeDocPath(docPath) {
        if (docPath.indexOf('/') === 0) {
            docPath = docPath.substring(1);
        }
        const extIndex = docPath.lastIndexOf('.');
        if (extIndex > -1) {
            docPath = docPath.substring(0, extIndex);
        }
        return docPath.toLowerCase();
    }
};
